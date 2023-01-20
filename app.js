const express = require("express")
const app = express()
const connct = require("./connection/connect")
const mongoose = require("mongoose");

const User = require("./models/user")
const Post = require("./models/post")
const bodyParser = require('body-parser');
const loginRoutes = require("./routes/register");
const postRoutes = require("./routes/postRoute")


connct()
app.use("/api/users", loginRoutes);
app.use("/api/posts", postRoutes)

app.listen(3000, () => console.log("This server is up and running at port 3000"));
