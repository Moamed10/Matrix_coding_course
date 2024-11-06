const User = require('../model/user');
const Comment = require("../model/comment")
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

const addcomment = (req, res) => {
    let postid = req.params.userId
    if (req.body.body && postid) {
        const commentdata = {
            comment: req.body.body, 
            post: postid
        }
        console.log(req.body); 
        const newcomment = new Comment(commentdata);
        newcomment.save()
            .then(data => {
                User.findById(postid)
                .then(UserInfo => {
                    UserInfo.Comments.push(newcomment._id)
                    UserInfo.save()  
                    .then(result => {
                        res.redirect("/users");
                    })
                })
            })
            .catch(err => {
                console.error("Error saving comment:", err);
                res.redirect("/users");
            });
    } else {
        // Handle the case when the comment body is empty
        res.redirect("/users");
    }
    
};




// display posts
const displayPosts = async (req, res) => {
    const users = await User.find().sort({ createdAt: -1 }).populate("Comments", "comment");
    res.render('doc', { data: users });
};
// display singel poost by click the readmore
const displaysingelPosts = async (req, res) => {
    const id = req.params.userId; 
    const user = await User.findById(id);
    res.render('post', { data: user });
};


const deletcomment = async (req, res) => {
    const postid = req.params.userId; 
    const commentId = req.params.commentId; 

    try {
        await Comment.findByIdAndDelete(commentId);

        const user = await User.findById(postid);
        await User.findByIdAndUpdate(postid, {
            $pull: { Comments: commentId }
        });

        res.redirect("/users");
    } catch (error) {
        console.error("Error deleting comment:", error);
        res.redirect("/users");
    }
};







const deletpostbyclick = async(req,res)=>{
    const id = req.params.userId; 
    const user = await User.findByIdAndDelete(id);
    res.redirect("/users")
}





module.exports = {
    displayPosts , 
    displaysingelPosts, 
    newuser, 
    deletpostbyclick,
    addcomment,
    deletcomment

 };
