require('dotenv').config();  
const express = require("express");
const mongoose = require("mongoose");
const router = require("./config/router"); 
const app = express();

const PORT = process.env.PORT || 2200;  
const MONGO_URI = process.env.MONGO_URI;  

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Database connected successfully!");
        app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
    })
    .catch((err) => {
        console.error("Connection error:", err);
    });
