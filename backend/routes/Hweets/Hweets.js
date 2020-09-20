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
hweetsRouter.get("/:hweets_id", getHweetsByUserId); //tested
hweetsRouter.get("/:hweets_id/:id", getSingleHweetByUser)
hweetsRouter.patch("/:id", updateHweet); //tested
hweetsRouter.post("/", checkFirebaseToken, addNewHweet); //tested
hweetsRouter.delete("/:id", deleteSingleHweet); //tested

module.exports = hweetsRouter;
