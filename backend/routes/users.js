const users = require("express").Router();
const { createUser, fetchAllUsers } = require("../queries/users");

users.post("/", createUser);
users.get("/", fetchAllUsers);
module.exports = users;
