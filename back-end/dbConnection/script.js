const path = require('node:path');
const mongoose = require('mongoose');
require('dotenv').config({path: path.join(__dirname, '..', '.env')});
const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL;
const connectToDB = async app =>{
    try{
        await mongoose.connect(DB_URL);
        console.log('Database Connected');
        app.listen(PORT, () => console.log('Server is running on port ' + PORT));
    }catch(error){
        console.error(`Error: ${error}`);
    }
}

module.exports = connectToDB;