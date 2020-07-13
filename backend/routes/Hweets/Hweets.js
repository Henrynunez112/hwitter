const hweetsRouter = require("express").Router();
const {addNewHweet, joinHweetsWithUsers, deleteSingleHweet} = require('../../queries/Hweets/Hweets')

hweetsRouter.get("/", joinHweetsWithUsers);
hweetsRouter.post('/', addNewHweet);
hweetsRouter.delete('/:id', deleteSingleHweet);