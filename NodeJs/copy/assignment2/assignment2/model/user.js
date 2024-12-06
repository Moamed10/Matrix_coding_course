const mongoose = require("mongoose");
const moment = require("moment")
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    message: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
