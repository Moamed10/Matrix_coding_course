const express = require("express");
const mongoose = require("./config/mongoose"); 
const routes = require('./config/routes'); 
const app = express();
const port = 5000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json()); 


app.use(routes);


mongoose.connection.once('open', () => {
    console.log("Database connected successfully!");
    app.listen(port, () => console.log(`App is running on port ${port}`));
});

mongoose.connection.on('error', (error) => {
    console.error("Connection error:", error);
});
