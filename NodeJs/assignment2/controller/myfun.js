
const User = require('../model/user');
// creating new user and store it
const newuser = async(req,res)=>{
    const newUser = new User(); 
    const name = req.body.name;
    const message = req.body.message;
    
    newUser.name = name;
    newUser.message = message;
    //  newUser.createdAt = time(); 
     await newUser.save();
    res.redirect("/users"); 
}
// display posts
const displayPosts = async (req, res) => {
    const users = await User.find().sort({ createdAt: -1 });
    res.render('doc', { data: users });
};
// display singel poost by click the readmore
const displaysingelPosts = async (req, res) => {
    const id = req.params.userId; 
    const user = await User.findById(id);
    res.render('post', { data: user });
};

module.exports = { displayPosts , displaysingelPosts,newuser };
