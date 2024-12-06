const User = require('../model/user');
const Comment = require("../model/comment")

// creating new user and store it
const UserInfo = require('../model/singup');  // Import UserInfo to fetch user details

const newuser = async (req, res) => {
    try {
        const userInfo = await UserInfo.findById(req.userId);
        if (!userInfo) {
            return res.status(404).send("User not found");
        }

        // Create a new post
        const newUser = new User({
            userId: userInfo._id,
            name: userInfo.username, 
            message: req.body.message
        });

        await newUser.save();

        // Add this post to the user's posts array
        userInfo.posts.push(newUser._id);
        await userInfo.save();

        res.redirect("/users");
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).send("Error creating post");
    }
};

// Add comment and associate with the user
const addcomment = (req, res) => {
    const postid = req.params.userId;

    // Make sure the user is logged in (i.e., req.userId exists)
    if (!req.userId) {
        console.error("User is not authenticated");
        return res.status(401).send("You need to be logged in to add a comment.");
    }

    const commentData = {
        comment: req.body.body,
        post: postid,
        userId: req.userId  // Ensure the logged-in user's ID is included
    };

    const newComment = new Comment(commentData);
    newComment.save()
        .then(comment => {
            User.findById(postid)
                .then(user => {
                    user.Comments.push(newComment._id);
                    user.save()
                        .then(() => {
                            res.redirect("/users");
                        })
                        .catch(err => {
                            console.error("Error saving comment to post:", err);
                            res.redirect("/users");
                        });
                })
                .catch(err => {
                    console.error("Error finding user:", err);
                    res.redirect("/users");
                });
        })
        .catch(err => {
            console.error("Error saving comment:", err);
            res.redirect("/users");
        });
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

// delete comment
const deletcomment = async (req, res) => {
    const postId = req.params.userId;
    const commentId = req.params.commentId;

    try {
        const comment = await Comment.findById(commentId);

        // Check if the comment exists
        if (!comment) {
            return res.status(404).send("Comment not found.");
        }

        // Check if the logged-in user owns this comment
        if (comment.userId.toString() === req.userId) {
            // Delete the comment
            await Comment.findByIdAndDelete(commentId);

            // Remove the comment from the post (User) that it belongs to
            await User.findByIdAndUpdate(postId, {
                $pull: { Comments: commentId }  // Remove the comment reference from the post
            });

            res.redirect("/users");
        } else {
            console.log("Unauthorized user attempting to delete the comment.");
            res.status(403).send("You are not authorized to delete this comment.");
        }
    } catch (error) {
        console.error("Error deleting comment:", error);
        res.redirect("/users");
    }
};


// delete post
const deletpostbyclick = async (req, res) => {
    const postId = req.params.userId;

    try {
        const post = await User.findById(postId);  // Find the post by ID

        // Check if the post exists
        if (!post) {
            return res.status(404).send("Post not found.");
        }

        console.log("Post ID:", post._id.toString());  // Log the post ID
        console.log("User ID:", req.userId);  // Log the logged-in user ID

        // Check if the logged-in user owns the post
        if (post.userId.toString() === req.userId) {  // Check if userId in post matches logged-in user
            console.log("User is authorized to delete the post.");

            // If the user owns the post, delete the post and associated comments
            if (post.Comments && post.Comments.length > 0) {
                await Comment.deleteMany({ _id: { $in: post.Comments } });
            }

            await User.findByIdAndDelete(postId);

            // Remove the post from the user's posts array (if you have such a reference in your user model)
            await UserInfo.findByIdAndUpdate(req.userId, {
                $pull: { posts: postId }
            });

            res.redirect("/users");
        } else {
            console.log("Unauthorized user attempting to delete the post.");  // Log unauthorized attempts
            res.status(403).send("You are not authorized to delete this post.");
        }
    } catch (error) {
        console.error("Error deleting post and associated comments:", error);
        res.redirect("/users");
    }
};





// exporting the function
module.exports = {
    displayPosts , 
    displaysingelPosts, 
    newuser, 
    deletpostbyclick,
    addcomment,
    deletcomment

 };
