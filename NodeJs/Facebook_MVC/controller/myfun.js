const Feed = require("../model/feed")
const express = require("express")


const displayfeed=async(req,res)=>{
    const feeds = await Feed.find()
    res.render("doc",{newfeed: feeds})
}



const creatfeed = async (req, res) => {
    try {
        const newFeed = new Feed({
            name: req.body.name,
            message: req.body.message,
            createdAt: new Date()  
        });
        await newFeed.save();
        res.redirect("/feed");  
    } catch (err) {
        res.send(err.message);  
    }
};

const singlefeed = async (req, res) => {
    try {
        const feedid = req.params.id;  // Accessing the feed ID from URL params
        const feed = await Feed.findById(feedid);  // Await the result since it's async
        if (!feed) {
            return res.send("Feed not found");
        }
        res.render("singlefeed", { feedbyid :feed });  // Assuming you want to render the feed details on a page
    } catch (err) {
        console.error(err);
        res.send("Server Error");
    }
};

const deletfeed = async (req, res) => {
    try {
        const feedid = req.params.id;  // Get the feed ID from the URL parameter
        const feed = await Feed.findByIdAndDelete(feedid);  // Delete the feed by its ID
        if (!feed) {
            return res.send("Feed not found");
        }
        res.redirect("/feed");  
    } catch (err) {
        console.error(err);
        res.send("Server Error");
    }
};

// Route handler for showing the edit feed page
const showedit = async (req, res) => {
    try {
        const feedid = req.params.id;  // Get the feed ID from the URL parameter
        const feed = await Feed.findById(feedid);  // Find the feed by ID
        
        if (!feed) {
            return res.send("Feed not found");
        }
        
        // Render the edit feed page and pass the feed data to the EJS template
        res.render("editfeed", { feed: feed });  
    } catch (err) {
        console.error(err);
        res.send("Server Error");
    }
};

const updatefeed = async (req, res) => {
    try {
        const feedid = req.params.id;  // Get the feed ID from the URL parameter
        const { name, message } = req.body;  // Get the updated name and message from the form
        
        const feed = await Feed.findByIdAndUpdate(feedid, { name, message },);
        
        if (!feed) {
            return res.send("Feed not found");
        }
        
        res.redirect("/feed"); 
    } catch (err) {
        console.error(err);
        res.send("Server Error");
    }
};






module.exports ={
    displayfeed,
    creatfeed,
    singlefeed,
    deletfeed,
    showedit,
    updatefeed,
}