const hashtagsRouter = require("express").Router();
const {
  getAllHashtags,
  getHashtagFromUser,
  addNewHashtag,
  deleteHashtag,
  gatherAllHashtags
} = require("../../queries/Hashtags/Hashtags");

hashtagsRouter.get("/all", gatherAllHashtags); //tested
hashtagsRouter.get("/", getAllHashtags);//tested
hashtagsRouter.get("/:post_id", getHashtagFromUser);
hashtagsRouter.post("/", addNewHashtag);//tested
hashtagsRouter.delete("/:id", deleteHashtag);//tested

module.exports = hashtagsRouter;
