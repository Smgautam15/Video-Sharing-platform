const express = require('express');
const cors = require('cors');
const app = express();

const connectToDB = require('./dbConnection/script');

// Middleware
app.use(express.json());
app.use(cors());

connectToDB(app);

app.get('/', async (req, res) =>{
    res.send('hello world');
})