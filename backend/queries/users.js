const db = require("../db/index");

const createUser = async (req, res, next) =>{
    try{
        await db.one(`INSERT INTO users (id, email, firstname, lastname) VALUES('${req.body.id}','${req.body.email}', '${req.body.firstname}', '${req.body.lastname}') RETURNING *`);
        res.status(200).json({
            status: "succes",
            message: "New Users created!",
        })
    }catch(err){
        console.log("vrom createUser", err)
        res.status(400).json({
            status: "error",
            message:"could not create the user",
            payload: err
        })
        next(err);
    }
};

const fetchAllUsers = async (req, res, next) =>{
    try{
        const users = await db.any("SELECT * FROM users");
        res.status(200).json({
            status: 'success',
            users,
            message: "These are all the users"
        })
    }catch(err){
        res.status(400).json({
            status: 'error',
            message: 'could not retrieve any of the users'
        })
        next(err);
    }
};

const deleteUsers = async (req, res, next) =>{
    try{
        let letGo = await db.none("DELETE FROM users WHERE id = $1", [req.params.id]);
        res.status(200).json({
            status: "success",
            message: "na-na-na-na na-na-na-na hey-hey-hey gooooodbye",
        })

    }catch(err){
        console.log(err);
        res.status(400).json({
            status: "error",
            message: "could not delete user"
        })

    }
}

const selectSingleUser = async (req, res, next) =>{
    try{
        let singleUser = await db.one("SELECT * FROM users WHERE id = $1", [req.params.id])
        res.status(200).json({
            status: "success",
            message: "Got the Single user",
            singleUser

        })
    }catch(err){
        console.log(err)
        res.status(400).json({
            status: 'Error',
            message: "could not get the user",
            payload: err
        })
        next(err);
    }
}

module.exports = {createUser, fetchAllUsers, selectSingleUser, deleteUsers}