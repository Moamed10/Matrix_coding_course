const express = require("express");
const mongoose = require("./config/mongoose"); // Ensure this filename is correct
const routes = require('./config/routes'); // Consistently use 'routes'
const app = express();
const port = 5000; // Changed to 5000 to avoid conflicts with 500

app.set('view engine', 'ejs');

// Middleware to serve static files
app.use(express.static(__dirname + '/public'));

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON data
app.use(express.json()); // Add this line to handle JSON request bodies

// Use the defined routes
app.use(routes);

// Handle successful connection
mongoose.connection.once('open', () => {
    console.log("Database connected successfully!");
    app.listen(port, () => console.log(`App is running on port ${port}`));
});

// Handle connection errors
mongoose.connection.on('error', (error) => {
    console.error("Connection error:", error);
});
