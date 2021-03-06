const hweetsRouter = require("express").Router();
const {
  addNewHweet,
  deleteSingleHweet,
  getSingleHweetByUser,
  getHweetsByUserId,
  updateHweet,
  getUsersImg
} = require("../../queries/Hweets/Hweets");
const { checkFirebaseToken } = require("../../middleware/auth");

// hweetsRouter.get("/", joinHweetsWithUsers); //tested
hweetsRouter.get("/", getUsersImg); //tested
hweetsRouter.get("/:hweets_id", checkFirebaseToken, getHweetsByUserId); //tested
hweetsRouter.get("/:hweets_id/:id", checkFirebaseToken, getSingleHweetByUser)
hweetsRouter.patch("/:hweets_id/:id", updateHweet); //tested
hweetsRouter.post("/", checkFirebaseToken, addNewHweet); //tested
hweetsRouter.delete("/:id", deleteSingleHweet); //tested

module.exports = hweetsRouter;
