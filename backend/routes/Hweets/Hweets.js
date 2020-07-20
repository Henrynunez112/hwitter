const hweetsRouter = require("express").Router();
const {addNewHweet, deleteSingleHweet, getAllHweets, getHweetsByUserId} = require('../../queries/Hweets/Hweets');
// const { checkFirebaseToken } = require("../../middleware/auth");

// hweetsRouter.get("/", joinHweetsWithUsers);
hweetsRouter.get("/", getAllHweets); //tested
hweetsRouter.get('/:hweets_id', getHweetsByUserId) //tested
hweetsRouter.post('/', addNewHweet); //tested
hweetsRouter.delete('/:id', deleteSingleHweet); //tested

module.exports = hweetsRouter;