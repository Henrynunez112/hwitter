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

const joinHweetsWithUsers = async(req, res, next) =>{
    try{
        let postMerge = await db.any('SELECT hweets.id, hweets.content, users.firstname, users.lastname FROM hweets LEFT JOIN users ON hweets.hweets_id = users.id ORDER BY time_stamp DESC')
        res.status(200).json({
            status: "succes",
            payload: postMerge,
            message: "managed to merge all the post"
        })
    }catch(error){
        console.log("from joinHweetsWithUsers:", error);
        res.status(400).json({
            status: "error",
            message: "could not merge all the users with the post"
        })

    }
};

const deleteSingleHweet = async(req, res, next) =>{
    try{
        let deleteHweet = await db.one("DELETE FROM hweets WHERE id = $1 RETURNING *", [req.params.id]);
        res.status(200).json({
            status: "success",
            payload: deleteHweet,
            message: "managed to delete the single Hweet"
        })

    }catch(error){
        console.log("from deleteSingleHweet:", error);
        res.status(400).json({
            status: "fail",
            message: "could not delete the single post"
        })
    }
}

module.exports = {addNewHweet, joinHweetsWithUsers, deleteSingleHweet}