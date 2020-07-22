const hashtagsRouter = require("express").Router();
const {
  getAllHashtags,
  getHashtagFromPost,
  addNewHashtag,
  deleteHashtag,
  gatherAllHashtags
} = require("../../queries/Hashtags/Hashtags");

hashtagsRouter.get("/all", gatherAllHashtags); //tested
hashtagsRouter.get("/", getAllHashtags);//tested
hashtagsRouter.get("/:post_id", getHashtagFromPost);
hashtagsRouter.post("/", addNewHashtag);//tested
hashtagsRouter.delete("/:id", deleteHashtag);//tested

module.exports = hashtagsRouter;
