const db = require("../../db/index");

const getAllHweets = async (req, res, next) =>{
  try{
    let allHweets = await db.any("SELECT * FROM hweets");
    res.status(200).json({
      status: 'succes',
      message: 'got all the hweets',
      body: allHweets
    })

  }catch(err){
    console.log(err);
    res.status(400).json({
      status: 'error',
      message: 'could not get all the hweets'
    })

  }
}

const addNewHweet = async (req, res, next) => {
  try {
    const { hweets_id, content} = req.body;
    let newHweet = await db.one(
      `INSERT INTO hweets (hweets_id, content) VALUES($1, $2) RETURNING *`,
      [hweets_id, content]
    );
    res.status(200).json({
      success: "success",
      message: "new post created",
      payload: newHweet
    });
  } catch (error) {
    console.log("from addNewHweet:", error);
    res.status(400).json({
      status: "error",
      message: "could not retreat the new hweet",
      payload: error
    });
    next(error)
  }
};

const joinHweetsWithUsers = async (req, res, next) => {
  try {
    let postMerge = await db.any(
      "SELECT hweets.id, hweets.content, users.firstname, users.lastname FROM hweets LEFT JOIN users ON hweets.hweets_id = users.id ORDER BY time_stamp DESC"
    );
    res.status(200).json({
      status: "succes",
      payload: postMerge,
      message: "managed to merge all the post",
    });
  } catch (error) {
    console.log("from joinHweetsWithUsers:", error);
    res.status(400).json({
      status: "error",
      message: "could not merge all the users with the post",
    });
  }
};

const deleteSingleHweet = async (req, res, next) => {
  try {
    let deleteHweet = await db.one(
      "DELETE FROM hweets WHERE id = $1 RETURNING *",
      [req.params.id]
    );
    res.status(200).json({
      status: "success",
      payload: deleteHweet,
      message: "managed to delete the single Hweet",
    });
  } catch (error) {
    console.log("from deleteSingleHweet:", error);
    res.status(400).json({
      status: "fail",
      message: "could not delete the single post",
    });
  }
};

const getHweetsByUserId = async (req, res, next) =>{
  let {hweets_id} = req.params;

  try{
    let userHweets = await db.any("SELECT * FROM hweets WHERE hweets_id = $1", [hweets_id]);
    res.status(200).json({
      status: 'succes',
      message: `all the hweets by users with hweets_id of ${hweets_id} retrieved`,
      body: userHweets
    })
  }catch(err){
    console.log(err)
    res.status(400).json({
      status: 'error',
      message: 'could not get hweets by user'
    })
  }
}

module.exports = { addNewHweet, joinHweetsWithUsers, deleteSingleHweet, getAllHweets, getHweetsByUserId };
