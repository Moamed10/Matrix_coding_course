require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connection successful");
    })
    .catch(err => {
        console.error("Connection error:", err);
    });

module.exports = mongoose;
