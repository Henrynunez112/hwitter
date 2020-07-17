const hashtagsRouter = require("express").Router();
const { getAllHashtags} = require("../../queries/Hashtags/Hashtags");

hashtagsRouter.get("/all", getAllHashtags);


module.exports = hashtagsRouter;