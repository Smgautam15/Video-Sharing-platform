const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        unique: true
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
    category: {
        type: Array,
        required: true
    },
    uploadDate: {
        type: Date,
        default: Date.now
    },
    uploadedBy: {
        type: String,
        require: true
    }
}, { timestamps: true });

const Video = mongoose.model('videos', videoSchema);
module.exports = Video;