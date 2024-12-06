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
        const feedid = req.params.id;  
        const feed = await Feed.findById(feedid); 
        if (!feed) {
            return res.send("Feed not found");
        }
        res.render("singlefeed", { feedbyid :feed }); 
    } catch (err) {
        console.error(err);
        res.send("Server Error");
    }
};

const deletfeed = async (req, res) => {
    try {
        const feedid = req.params.id;  
        const feed = await Feed.findByIdAndDelete(feedid); 
        if (!feed) {
            return res.send("Feed not found");
        }
        res.redirect("/feed");  
    } catch (err) {
        console.error(err);
        res.send("Server Error");
    }
};

const showedit = async (req, res) => {
    try {
        const feedid = req.params.id;  
        const feed = await Feed.findById(feedid);  
        
        if (!feed) {
            return res.send("Feed not found");
        }
        
     
        res.render("editfeed", { feed: feed });  
    } catch (err) {
        console.error(err);
        res.send("Server Error");
    }
};

const updatefeed = async (req, res) => {
    try {
        const feedid = req.params.id; 
        const { name, message } = req.body;  
        
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