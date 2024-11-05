const user = require('../model/data');

const displayPosts = (req, res) => {
    
    res.render('doc', { data: user });
};

const getPostByName = (req, res) => {

    const name = req.body.name; 
    const newUser = user.find(item => item.name === name); 
    res.render('Content', { use: newUser });
};

module.exports = {
    displayPosts,
    getPostByName
};
