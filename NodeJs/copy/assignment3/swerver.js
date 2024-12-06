const express = require("express");
const mongoose = require("./config/mongoose"); 
const routes = require('./config/routes');
var cookieParser = require('cookie-parser')

const app = express();
app.use(cookieParser())

require('dotenv').config();
const PORT = process.env.PORT || 3000;


app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(routes);
mongoose.connection.once('open', () => {
    console.log("Database connected successfully!");
    app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
});

mongoose.connection.on('error', (error) => {
    console.error("Connection error:", error);
});


