const mongoose = require("mongoose")

const feedschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 15
    },
    message: {
        type: String,
        required: true,
        maxLength: 40
    },
    createdAt: {
        type: Date,
        default: Date.now // Use Date.now to set the current date and time if not provided
    }
});

const Feed = mongoose.model('Feed', feedschema);

module.exports = Feed;
