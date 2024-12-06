const express = require("express");
const mongoose = require("./config/mongoose");
const routes = require("./config/routes");
var cookieParser = require("cookie-parser");
const cors = require("cors"); // Import CORS middleware

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// CORS Configuration
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from the Vite frontend
    credentials: true, // Allow cookies to be sent
  })
);

// View engine
app.set("view engine", "ejs");

// Routes
app.use(routes);

// MongoDB Connection
mongoose.connection.once("open", () => {
  console.log("Database connected successfully!");
  app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
});

mongoose.connection.on("error", (error) => {
  console.error("Connection error:", error);
});
