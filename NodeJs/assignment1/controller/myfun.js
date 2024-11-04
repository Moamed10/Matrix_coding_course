const user = require('../model/data');

const displayPosts = (req, res) => {
    
    res.render('doc', { data: user });
};

const getPostByName = (req, res) => {
    user_data.sort((a, b) => {
        // Convert createdAt strings to Date objects
        const dateA = new Date(a.createdAt.split('-').reverse().join('-'));
        const dateB = new Date(b.createdAt.split('-').reverse().join('-'));
        return dateA - dateB; // Sort in ascending order
    });
    const name = req.body.name; 
    const newUser = user.find(item => item.name === name); 
    res.render('Content', { use: newUser });
};

module.exports = {
    displayPosts,
    getPostByName
};
