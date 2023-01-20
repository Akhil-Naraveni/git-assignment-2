const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const postSchema = new Schema({
    title: {type: String, required: true},
    body: {type: String, unique: true},
    image: {type: String, min: 6, max: 16},
    user: {type: String, ref: "User"}
}, {timestamps : true});

const postModel = mongoose.model('Post', postSchema);

module.exports = postModel;



