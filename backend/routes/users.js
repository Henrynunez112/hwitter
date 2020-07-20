const users = require("express").Router();
const {
  createUser,
  fetchAllUsers,
  selectSingleUser,
  deleteUsers,
  updateUserInfo
} = require("../queries/users");
//check for users who are completely logged in
// const { checkFirebaseToken } = require("../middleware/auth");


// checkFirebaseToken
users.post("/", createUser);
users.get("/:id", selectSingleUser);
users.get("/", fetchAllUsers);
users.delete("/:id", deleteUsers);
users.patch("/:id", updateUserInfo);
module.exports = users;
