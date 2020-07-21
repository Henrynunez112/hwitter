const hashtagsRouter = require("express").Router();
const {
  getAllHashtags,
  getHashtagFromUser,
  addNewHashtag,
} = require("../../queries/Hashtags/Hashtags");

hashtagsRouter.get("/", getAllHashtags);
hashtagsRouter.get("/:post_id", getHashtagFromUser);
hashtagsRouter.post("/", addNewHashtag);

module.exports = hashtagsRouter;
