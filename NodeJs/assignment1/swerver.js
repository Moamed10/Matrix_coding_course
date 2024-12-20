const express = require("express")
const router = require("./config/routes")
const app = express()
const port = 500
app.set('view engine', 'ejs');

const route = require('./config/routes')
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use(route)

app.listen(port, console.log(`app is on ${port}`))