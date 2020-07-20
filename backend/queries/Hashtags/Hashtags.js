const db = require("../../db/index");

const getAllHashtags = async (req, res, next) => {
  try {
    let allHweetsTags = await db.any(
      'SELECT DISTINCT hweet_tags FROM hashtags'
    );
    res.status(200).json({
      status: "success",
      message: "you have gotten all distinct users",
      payload: allHweetsTags,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
        status: 'fail',
        message: 'something went wrong, sorry'
    })
  }
};

const getHweettagsBasedOnPost = async (req, res, next) =>{
    try{
        let hweetPost = await db.any(`SELECT hashtags.id AS `)
    }catch(error){
        console.log(error);
        res.status(400).json({
            status: 'fail',
            message: "something went wrong when getting all hweet_tags"
        })

    }
}

module.exports = { getAllHashtags };
