const express = require('express');
const cors = require('cors');
const app = express();
const multer = require("multer");
const path = require('node:path');
const cookieParser = require('cookie-parser');
const connectToDB = require('./dbConnection/script');
const videoRoute = require('./routes/video');
const userRoute = require('./routes/auth');

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/videos", express.static(path.join(__dirname, "/videos")));

connectToDB(app);

app.use('/api/auth', userRoute);
app.use('/api/videos', videoRoute);