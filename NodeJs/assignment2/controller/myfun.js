// const user = require('../model/data');
const { name } = require('ejs');
const { param } = require('../config/routes');
const User = require('../model/user');

const displayPosts = (req, res) => {
    
    res.render('doc', { data: user });
};


const createUser = async (req, res) => {
    const { postname, postmessage } = req.body; 

    if (!postname || !postmessage) {
        return res.status(400).json({ error: 'Name and message are required.' });
    }

    // Create a new user instance
    const newUser = new User({
        name: postname,
        message: postmessage,
        createdAt: new Date(),
    });

    try {
        // Save the new user to the database
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error saving user:', error); // Log the error for debugging
        res.status(500).json({ error: 'Internal server error.' }); // Handle error appropriately
    }
};

module.exports = createUser; // Corrected from 'model.exports' to 'module.exports'
