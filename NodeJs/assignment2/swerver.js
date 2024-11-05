// app.js
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./config/routes"); 
const app = express();
const port = 3100;

// Connect to MongoDB
mongoose.connect("mongodb+srv://mohamedalmhmod12:mo123@cluster0.xg1vg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to MongoDB successfully");
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use('/', routes); // Ensure this line is correct to use the routes

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
