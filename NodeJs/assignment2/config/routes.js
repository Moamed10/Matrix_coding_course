// config/routes.js
const express = require("express");
const User = require("../model/user");
const router = express.Router();

// Display posts
router.get('/', async (req, res) => {
    try {
        const users = await User.find();  // Fetch all users
        res.render('doc', { data: users });  // Render the posts
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

// Handle new post submission
router.post('/addPost', async (req, res) => {
    const { name, message } = req.body;

    try {
        // Create a new user post
        const newUser = new User({ name, message });
        await newUser.save();
        res.redirect('/');  // Redirect to the main page
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
