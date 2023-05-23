const Video = require('../models/video');

//CREATE POST
const createNewPost = async (req, res) => {
    const newVideo = new Video(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json(err);
    }
}

//DELETE POST
const deletePost = async (req, res) => {
    try {
      const video = await Video.findById(req.params.id);
      if (video.username === req.body.username) {
        try {
          await video.delete();
          res.status(200).json("Post has been deleted...");
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can delete only your post!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
}

//GET POST
const getPost = async (req, res) => {
    try {
      const video = await Video.findById(req.params.id);
      res.status(200).json(video);
    } catch (err) {
      res.status(500).json(err);
    }
}  

// Get all posts
const getAllPost = async (req, res) => {
    const username = req.query.user;
    try {
      let videos;
      if (username) {
        videos = await Video.find({ username });
      } else {
        videos = await Video.find({});
      }
      res.status(200).json(videos);
    } catch (err) {
      res.status(500).json(err);
    }
}

module.exports = {createNewPost, deletePost, getPost, getAllPost};
