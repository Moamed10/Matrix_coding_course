// const express = require("express");
// const user_data = require("../model/data");
// const router = express.Router();
// const myfunction = require("../controller/myfun");

// router.get('/users', myfunction.displayPosts);
// router.post('/user/search', myfunction.getPostByName); 
// module.exports = router;
const express = require("express");
const router = express.Router();
const User = require("../model/user"); // Adjust the path according to your structure

// Route to create a user
router.post("/users", async (req, res) => {
    const { name, message } = req.body; // Extract name and message from the request body

    // Validate input
    if (!name || !message) {
        return res.status(400).json({ message: "Name and message are required." });
    }

    try {
        // Create a new user instance
        const newUser = new User({ name, message });

        // Save the user to the database
        await newUser.save();

        // Respond with the created user
        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Error creating user" });
    }
});

module.exports = router;
