const admin = require("../firebase");

const checkFirebaseToken = async (req, res, next) => {
  try {
    console.log("henry was here")
    const token = req.headers.authtoken;
    const decodedToken = await admin.auth().verifyIdToken(token);
    console.log(decodedToken, "this is the decodedToken console.log");
    const uid = decodedToken.uid;
    req.user_id = uid;
    next();
  } catch (err) {
    console.log("Code Broke, ", err);
    res.status(400).json({
      message: "No authenthicated users",
    });
  }
};

module.exports = {
  checkFirebaseToken,
};
