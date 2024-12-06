const mongoose = require("mongoose")
const User = require("./user")

const Schema = mongoose.Schema

const userinfo = new Schema({

    username :{
        type : String,
        required : true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true, 
    },

    password : {
        type : String,
        required : true,
    }

})

const UserInfo = mongoose.model("UserInfo",userinfo)

module.exports = UserInfo;

