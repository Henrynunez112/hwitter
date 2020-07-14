const users = require("express").Router();
const {
  createUser,
  fetchAllUsers,
  selectSingleUser,
  deleteUsers
} = require("../queries/users");
//check for users who are completely logged in
// const { checkFirebaseToken } = require("../middleware/auth");


// checkFirebaseToken
users.post("/", createUser);
users.get("/:id", selectSingleUser);
users.get("/", fetchAllUsers);
users.delete("/:id", deleteUsers)
module.exports = users;
