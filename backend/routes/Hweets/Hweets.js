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

hweetsRouter.get("/", joinHweetsWithUsers); //tested
hweetsRouter.get("/images", getUsersImg); //tested
hweetsRouter.get("/:hweets_id", checkFirebaseToken, getHweetsByUserId); //tested
hweetsRouter.put("/:id", updateHweet); //tested
hweetsRouter.post("/", checkFirebaseToken, addNewHweet); //tested
hweetsRouter.delete("/:id", deleteSingleHweet); //tested

module.exports = hweetsRouter;
