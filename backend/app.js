const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const userRouter = require("./routes/users");
const hweetsRouter = require("./routes/Hweets/Hweets");
const hashtagsRouter = require("./routes/Hashtags/Hashtags");
const searchRouter = require("./routes/Search/Search")


const PORT = process.env.PORT;
const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/users", userRouter);
app.use("/hweets", hweetsRouter);
app.use("/hashtags", hashtagsRouter);
app.use("/search", searchRouter);


app.use((err, req, res, next) =>{
    console.log("henry",err);
    if(err.status){
        res.status(err.status).json(err);
    }else{
        res.status(500).json(err)
    }
})

app.listen(PORT, () =>{
    console.log("listening to port " + PORT);
})