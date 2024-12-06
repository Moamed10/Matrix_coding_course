const mongoose = require("mongoose");
const moment =require('moment/moment')
 
// const time = () => moment().format("YYYY-MM-DD")
// console.log(time())
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now

    },
    message: {
        type: String,
        required: true
    }
});
userSchema.virtual('formattedCreatedAt').get(function () {
    return moment(this.createdAt).format("YYYY-MM-DD");
});
const User = mongoose.model("User", userSchema);

module.exports = User;




// const deleteAllUsers = async () => {
//     try {
//         await User.deleteMany({});
//         console.log("All users deleted successfully.");
//     } catch (error) {
//         console.error("Error deleting users:", error);
//     }
// };

// deleteAllUsers();
