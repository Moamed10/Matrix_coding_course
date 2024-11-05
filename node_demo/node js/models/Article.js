// importing the mongoose
const mongoose = require('mongoose');
// define the Schema 
const Schema = mongoose.Schema
// using schema like opp
const articleSchema = new Schema({
    title : String,
    body : String,
    numberoflikes : String,
})
// take 2 param first the name of the collection  second param is the the schema 
const Article = mongoose.model("Article" , articleSchema)


// export
module.exports =  Article
