const express = require("express");
const mongoose = require("./config/mongoose"); 
const routes = require('./config/routes'); 
const app = express();
const port = 5000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.use(express.json());
mongoose.connection.once('open', () => {
    console.log("Database connected successfully!");
    app.listen(port, () => console.log(`App is running on port ${port}`));
});

mongoose.connection.on('error', (error) => {
    console.error("Connection error:", error);
});


