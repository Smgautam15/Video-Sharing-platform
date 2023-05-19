const Video = require('../models/video');

const getAllVideos = async (req, res) =>{
    try{
        const response = await Video.find({});
        res.status(200).json(response);
    }catch(error){
        res.status(500).json(error.message);
    }
}

const getSpecificUserVideos = async (req, res) =>{
    try{
        const user = req.params.username;
        const response = await Video.find({uploadedBy: user});
        res.status(200).json(response);
    }catch(error){
        res.status(500).json(error.message);
    }
}

module.exports = {getAllVideos, getSpecificUserVideos};
