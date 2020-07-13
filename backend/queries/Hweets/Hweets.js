const db = require("../../db/index");


const addNewHweet = async (req, res, next) =>{
    try{
        let newHweet = await db.one(`INSERT INTO hweets (content) VALUES('${req.body.content}')RETURNING *`)
        res.status(200).json({
            success: "got new post",
            payload: newHweet,
            message: 'new post created'
        })

    }catch(error){
        console.log("from addNewHweet:",error);
        res.status(400).json({
            status: "error",
            message: "could not retreat the new hweet"
        })

    }
}

const joinPostWithUsers = async(req, res, next) =>{
    try{
        let postMerge = await db.any('SELECT hweets.id, hweets.content, users.firstname, users.lastname FROM hweets LEFT JOIN users ON hweets.hweets_id = users.id ORDER BY time_stamp DESC')
        res.status(200).json({
            status: "succes",
            payload: postMerge,
            message: "managed to merge all the post"
        })
    }catch(error){
        console.log("from joinPOstWithUsers:", error);
        res.status(400).json({
            status: "error",
            message: "could not merge all the users with the post"
        })

    }
};

module.exports = {addNewHweet, joinPostWithUsers}