const express = require('express');
const cors = require('cors');
const app = express();

const connectToDB = require('./dbConnection/script');
const videoRouter = require('./routes/video');

// Middleware
app.use(express.json());
app.use(cors());

connectToDB(app);

app.use('/', videoRouter);