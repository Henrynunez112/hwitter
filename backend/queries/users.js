const db = require("../db/index");

const createUser = async (req, res, next) =>{
    try{
        await db.none("INSERT INTO users (id, email) VALUES(${id}, ${email})", req.body);
        res.json({
            message: "New Users created!"
        })
    }catch(err){
        next(err);
    }
};

const fetchAllUsers = async (req, res, next) =>{
    try{
        const users = await db.any("SELECT * FROM users");
        res.json({
            users,
            message: "BLACK LIVES MATTER"
        })
    }catch(err){
        next(err);
    }
}

module.exports = {createUser, fetchAllUsers}