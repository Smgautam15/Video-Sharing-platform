const express = require('express');
const cors = require('cors');
const app = express();
const multer = require("multer");
const path = require('node:path');
const connectToDB = require('./dbConnection/script');
const videoRoute = require('./routes/video');
const userRoute = require('./routes/auth');

// Middleware
app.use(express.json());
app.use(cors());
app.use("/videos", express.static(path.join(__dirname, "/videos")));

connectToDB(app);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "videos");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
});
  
const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});

app.use('/api/auth', userRoute);
app.use('/api/videos', videoRoute);