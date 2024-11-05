const express = require("express");
const mongoose = require('mongoose');

const app = express();
const Article = require('./models/Article')
// MongoDB connection
mongoose.connect("mongodb+srv://mohamedalmhmod12:<db_password>@cluster0.xg1vg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connection successfuly");
    })
    .catch(err => {
        console.error("Connection error:", err);
    });

// Middleware
app.use(express.json());

// Routes
app.post("/comment", (req, res) => {
    res.send("comment");
});

app.delete("/delete", (req, res) => {
    res.send("delete request");
});

// Path parameters
app.get("/findsum/:num1/:num2", (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    let total = Number(num1) + Number(num2);
    res.send(`This is the total ${total}`);
});

// Body parameters
app.post("/body", (req, res) => {  // Changed to POST for body
    console.log(req.body.name);
    res.send(`Hello ${req.body.name}`);
});

// Send HTML file
app.get("/test", (req, res) => {
    res.sendFile(__dirname + '/doc.html'); // Ensure correct path
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.post('/articles',async(req,res)=>{
    const newarticle = new Article() 
    const arttitle = req.body.articletitle
    const artbody = req.body.articlebody
    newarticle.title = arttitle
    newarticle.body = artbody
    newarticle.numberoflikes = 0
    await newarticle.save()
    res.json(newarticle)
    // res.send("it has store sucsusfully")
})

// app.get("/articles",async (req,res)=>{
//     const articles = await Article.find()
//     res.json(articles)

// })


app.delete("/articles/:id",async (req,res)=>{
    const id = req.params.id
    const articles = await Article.findByIdAndDelete(id)
    res.json(articles)

})




// Start server
app.listen(3000, () => {
    console.log("Listening on port 3000");
});
