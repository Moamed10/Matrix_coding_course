const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Reference to User posts
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }] // Reference to Comment
});

module.exports = mongoose.model("UserInfo", userSchema);
