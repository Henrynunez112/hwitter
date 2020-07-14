const hweetsRouter = require("express").Router();
const {addNewHweet, joinHweetsWithUsers, deleteSingleHweet} = require('../../queries/Hweets/Hweets');
// const { checkFirebaseToken } = require("../../middleware/auth");

hweetsRouter.get("/", joinHweetsWithUsers);
hweetsRouter.post('/', addNewHweet);
hweetsRouter.delete('/:id', deleteSingleHweet);

module.exports = hweetsRouter;