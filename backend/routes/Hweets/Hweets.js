const hweetsRouter = require("express").Router();
const {
  addNewHweet,
  deleteSingleHweet,
  joinHweetsWithUsers,
  getHweetsByUserId,
  updateHweet,
} = require("../../queries/Hweets/Hweets");
const { checkFirebaseToken } = require("../../middleware/auth");

hweetsRouter.get("/", joinHweetsWithUsers); //tested
// hweetsRouter.get("/", getAllHweets); //tested
hweetsRouter.get("/:hweets_id", checkFirebaseToken, getHweetsByUserId); //tested
hweetsRouter.put("/:id", updateHweet); //tested
hweetsRouter.post("/", addNewHweet); //tested
hweetsRouter.delete("/:id", deleteSingleHweet); //tested

module.exports = hweetsRouter;
