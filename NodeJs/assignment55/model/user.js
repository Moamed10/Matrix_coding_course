const mongoose = require("mongoose");
const moment =require('moment/moment')
const Schema = mongoose.Schema

// const time = () => moment().format("YYYY-MM-DD")
// console.log(time())
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    userId: {  // Add this field to associate posts with a user
        type: Schema.Types.ObjectId,
        ref: 'UserInfo',  // Reference to the UserInfo model (which stores user details)
        required: true
    },
    Comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }],
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

userSchema.virtual('formattedCreatedAt').get(function () {
    return moment(this.createdAt).format("YYYY-MM-DD");
});
const User = mongoose.model("User", userSchema);

module.exports = User;





