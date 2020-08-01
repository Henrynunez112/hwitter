const db = require("../db/index");

const getSingleUser = async (req, res, next) =>{
  try{

  }catch(err){
    console.log()

  }
}

const createUser = async (req, res, next) => {
  try {
    await db.one(
      `INSERT INTO users (id, email, firstname, lastname, imgurl) VALUES('${req.body.id}','${req.body.email}', '${req.body.firstname}', '${req.body.lastname}', '${req.body.imgurl}') RETURNING *`
    );
    res.status(200).json({
      status: "succes",
      message: "New Users created!",
    });
  } catch (err) {
    console.log("errom createUser", err);
    res.status(400).json({
      status: "error",
      message: "could not create the user",
      payload: err,
    });
    next(err);
  }
};

const fetchAllUsers = async (req, res, next) => {
  try {
    const users = await db.any("SELECT * FROM users");
    res.status(200).json({
      status: "success",
      users,
      message: "These are all the users",
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: "could not retrieve any of the users",
    });
    next(err);
  }
};

const deleteUsers = async (req, res, next) => {
  let { id } = req.params;
  try {
    let letGo = await db.none("DELETE FROM users WHERE id = $1", [id]);
    res.status(200).json({
      status: "success",
      message: "na-na-na-na na-na-na-na hey-hey-hey gooooodbye",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "error",
      message: "could not delete user",
    });
  }
};

const selectSingleUser = async (req, res, next) => {
  let { id } = req.params;
  try {
    let singleUser = await db.one("SELECT * FROM users WHERE id = $1", [id]);
    res.status(200).json({
      status: "success",
      message: "Got the Single user",
      singleUser,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "Error",
      message: "could not get the user",
      payload: err,
    });
    next(err);
  }
};

const updateUserInfo = async (req, res, next) => {
  let { id } = req.params;
  let { email, firstname, lastname } = req.body;
  try {
    let newInfo = await db.one(
      `UPDATE users SET email = $1, firstname = $2, lastname = $3 WHERE id = $4 RETURNING *`,
      [email, firstname, lastname, id]
    );
    res.status(200).json({
      status: "success",
      message: "users info has been updated",
      body: newInfo,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "error",
      message: "could not update the users info",
    });
  }
};

module.exports = {
  createUser,
  fetchAllUsers,
  selectSingleUser,
  deleteUsers,
  updateUserInfo,
};
