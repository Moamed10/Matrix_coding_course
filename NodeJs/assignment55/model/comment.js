const mongoose = require("mongoose");
const Schema = mongoose.Schema

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "User",  // Link comment to the post
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "UserInfo",  // Link comment to the user who made it
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});


const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;




// // const deleteAllUsers = async () => {
// //     try {
// //         await User.deleteMany({});
// //         console.log("All users deleted successfully.");
// //     } catch (error) {
// //         console.error("Error deleting users:", error);
// //     }
// // };

// // deleteAllUsers();
