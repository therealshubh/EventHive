require("dotenv").config();
const express = require("express");
const app = express();
const eventRoute = require("./routers/events");
const PORT = process.env.PORT || 3000;
const ConnectDB = require("./db/db")

app.use('/events',eventRoute);
ConnectDB();

app.listen(PORT,() =>{
    console.log(`Server is running on PORT ${PORT}`);
    
})