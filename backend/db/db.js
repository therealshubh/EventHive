require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;
const mongoose = require("mongoose");

async function ConnectDB(){
    try {
        await mongoose.connect(MONGO_URL);
        console.log("connected to MongoDB successfully");
        
    } catch (error) {
        console.log("MongoDB connection failed:",error.message);
        
    }
}

module.exports = ConnectDB;