const db = require("../../db/index");

const searchResults = async (req, res, next) => {
  try {
    let result = await db.any(
      `SELECT users.firstname, users.lastname, full_hweet.* FROM(
        SELECT hweets.*, array_remove(ARRAY_AGG(hashtags.hweet_tags), NULL) AS hweet_tags
        FROM hweets JOIN hashtags ON hweets.id = hashtags.post_id
         GROUP BY hweets.id, hweets.content, hweets.time_stamp
      ) AS full_hweet
      JOIN users ON users.id = full_hweet.hweets_id
      WHERE '#${req.params.search}' = ANY(full_hweet.hweet_tags) ORDER BY time_stamp DESC`
    );
    res.status(200).json({
      status: "success",
      message: "Got the full results",
      body: result
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "error",
      message: "cound not get your search result",
    });
  }
};

module.exports = {
  searchResults,
};
