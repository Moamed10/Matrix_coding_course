const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 25 ,
    },

    article:{
        type:String,
        required: true,
        minlength: 100 ,

    }
    
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
