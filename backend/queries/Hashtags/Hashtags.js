const db = require("../../db/index");

const getAllHashtags = async (req, res, next) => {
  try {
    let allHweetsTags = await db.any(
      "SELECT DISTINCT hweet_tags FROM hashtags"
    );
    res.status(200).json({
      status: "success",
      message: "you have gotten all distinct hashtags",
      payload: allHweetsTags,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      message: "something went wrong, sorry",
    });
  }
};

const getHashtagFromUser = async (req, res, next) => {
  let { post_id } = req.params;
  try {
    let singleHashtag = await db.any(
      "SELECT * FROM hashtags WHERE post_id = $1",
      [post_id]
    );
    res.status(200).json({
      status: "success",
      message: "was able to get all the post by user",
      body: singleHashtag,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "error",
      message: "could not get the hashtags based on the hweets",
    });
  }
};

const addNewHashtag = async (req, res, next) => {
  try {
    const { hweet_tags } = req.body;
    let newHashtag = await db.one(
      `INSERT INTO hashtags (post_id, hweeter_id, hweet_tags) VALUES($1, $2, $3) RETURNING *`,
      [hweet_tags]
    );
    res.status(200).json({
      success: "success",
      message: "new hashtag created",
      payload: newHashtag,
    });
  } catch (error) {
    console.log("from addNewHweet:", error);
    res.status(400).json({
      status: "error",
      message: "could not retreat the new hweet",
      payload: error,
    });
    next(error);
  }
};

// const getHweettagsBasedOnPost = async (req, res, next) =>{
//     try{
//         let hweetPost = await db.any(`SELECT hashtags.id AS `)
//     }catch(error){
//         console.log(error);
//         res.status(400).json({
//             status: 'fail',
//             message: "something went wrong when getting all hweet_tags"
//         })

//     }
// }

module.exports = { getAllHashtags, getHashtagFromUser, addNewHashtag };
