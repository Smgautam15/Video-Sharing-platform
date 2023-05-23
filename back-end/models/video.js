const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: false,
    },
    username: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
        required: false,
    },
    views: {
        type: Number,
        required: true,
        default: 0
    },
    visibility: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Video = mongoose.model('videos', videoSchema);
module.exports = Video;