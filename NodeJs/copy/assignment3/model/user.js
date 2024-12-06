const mongoose = require("mongoose");
const moment =require('moment/moment')
const Schema = mongoose.Schema

// const time = () => moment().format("YYYY-MM-DD")
// console.log(time())
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Comments :[{
        type : Schema.Types.ObjectId,
        ref : "Comment",

    }],
    createdAt: {
        type: Date,
        default: Date.now

    },
    message: {
        type: String,
        required: true
    }
});
userSchema.virtual('formattedCreatedAt').get(function () {
    return moment(this.createdAt).format("YYYY-MM-DD");
});
const User = mongoose.model("User", userSchema);

module.exports = User;





