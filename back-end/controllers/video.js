const Video = require('../models/video');

//CREATE POST
const createNewPost = async (req, res) => { 
  const info = {...req.body};
  console.log(info);
  const newVideo = new Video({...info, video: `/videos/${req.file.filename}`});
  console.log(newVideo);
  try {
    console.log('hello');
    const savedPost = await newVideo.save();
    console.log(savedPost);
    res.status(200).json(savedPost);
  } catch (err) {
    console.log('Error')
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
    try {
      const allVideo = await Video.find({});
      console.log(allVideo);
      res.status(200).json(allVideo);
    } catch (err) {
      res.status(500).json(err);
    }
}

module.exports = {createNewPost, deletePost, getPost, getAllPost};
