const hweetsRouter = require("express").Router();
const {
  addNewHweet,
  deleteSingleHweet,
  joinHweetsWithUsers,
  getHweetsByUserId,
  updateHweet,
  getUsersImg
} = require("../../queries/Hweets/Hweets");
const { checkFirebaseToken } = require("../../middleware/auth");

// hweetsRouter.get("/", joinHweetsWithUsers); //tested
hweetsRouter.get("/", getUsersImg); //tested
hweetsRouter.get("/:hweets_id", checkFirebaseToken, getHweetsByUserId); //tested
hweetsRouter.patch("/:id", updateHweet); //tested
hweetsRouter.post("/", checkFirebaseToken, addNewHweet); //tested
hweetsRouter.delete("/:id", deleteSingleHweet); //tested

module.exports = hweetsRouter;
