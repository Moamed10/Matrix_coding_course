const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mohamedalmhmod12:mo123@cluster0.xg1vg.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connection successful");
    })
    .catch(err => {
        console.error("Connection error:", err);
    });

module.exports = mongoose;
