require('dotenv').config();  // Ensure dotenv is called first
const express = require("express");
const mongoose = require("mongoose");
const router = require("../Demo1/config/route"); // Assuming you have routes in this file
const app = express();

// Access the environment variables
const PORT = process.env.PORT || 1200;  // Default to 1200 if not specified
const MONGO_URI = process.env.MONGO_URI;  // MongoDB URI from .env

// Set up view engine (EJS)
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up routes
app.use(router);

// Connect to MongoDB (no deprecated options needed)
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Database connected successfully!");
        app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
    })
    .catch((err) => {
        console.error("Connection error:", err);
    });
