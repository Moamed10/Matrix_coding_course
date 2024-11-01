const express = require("express")
const router = require("./config/routes")
const app = express()
const port = 500
app.set('view engine', 'ejs');

const route = require('./config/routes')


// app.use(express.json());
// console.log(__dirname +)
// app.use(express.static(path.join(__dirname + '/pupblic/style.css')))

app.use(express.urlencoded({ extended: true }));
app.use(route)


app.listen(port, console.log(`app is on ${port}`))





// extend false and true