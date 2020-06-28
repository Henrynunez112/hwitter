const users = require("express").Router();
const { createUser, fetchAllUsers } = require("../queries/users");
//check for users who are completely logged in
const { checkFirebaseToken } = require("../middleware/auth");

users.post("/", createUser);
users.get("/", checkFirebaseToken, fetchAllUsers);
module.exports = users;
