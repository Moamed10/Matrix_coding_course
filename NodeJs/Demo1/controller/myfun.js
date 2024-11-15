const { post } = require("../config/route");
const Article = require("../model/article")
const createArticle = async (req, res) => {
    try {
        const newArticle = new Article(req.body);
        await newArticle.save(); 
        res.redirect("/articles");
    } catch (err) {
        if (err.name === "ValidationError") {
            res.status(400).send("Validation Error: " + err.message);
        } else {
            res.status(500).send("Error creating article: " + err.message);
        }
    }
};




const displayarticles= async (req,res) =>{
    const articles = await Article.find()
    res.render("doc",{newArticle: articles})

}
const displaycreatarticles= async (req,res) =>{
   
    res.render("creat_article")

}

const deletearticle = async (req, res) => {

    try {
        const articleId = req.body.articleId;  // Get the article ID from the form
        console.log(articleId)

        await Article.findByIdAndDelete(articleId);  // Delete the article by its ID
        res.redirect("/articles");  // Redirect to the articles list page after deletion
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting article");
    }
};


const displayeditarticle = async (req, res) => {
    try {
        const articleId = req.body.articleId;  
        const article = await Article.findById(articleId); // Fetch article without deleting it
        if (!article) {
            return res.status(404).send("Article not found");
        }
        res.render("edit_article", { newarticle: article }); // Pass article to EJS view
    } catch (error) {
        console.error("Error fetching article:", error);
        res.status(500).send("Error loading article for editing");
    }
};


const saveEditedArticle = async (req, res) => {
    try {
        const articleId = req.params.articleId; 
        const { title, content } = req.body; 

        const updatedArticle = await Article.findByIdAndUpdate(articleId, { title, article: content }, { new: true });
        
        if (!updatedArticle) {
            return res.status(404).send("Article not found");
        }
        
        res.redirect(`/articles`); // Redirect to the article view page or any desired page
    } catch (error) {
        console.error("Error saving article:", error);
        res.status(500).send("Error saving article");
    }
};






module.exports={
    createArticle,
    displayarticles,
    displaycreatarticles,
    deletearticle,
    displayeditarticle,
    saveEditedArticle,

}