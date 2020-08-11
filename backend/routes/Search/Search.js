const searchRouter = require("express").Router();
const {searchResults} = require("../../queries/Search/Search");

searchRouter.get("/:search", searchResults);

module.exports = searchRouter;