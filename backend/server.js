const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT;
app.use(cookieParser());
app.use(express.json());
//Import Routes
const userRoute = require('./routes/users');
const credRoute = require('./routes/credentials');

//Mount Routes
app.use("/", userRoute)
app.use("/", credRoute)

// Connect to DB
mongoose.connect(process.env.mongoDBURL,{useNewUrlParser: true, useUnifiedTopology: true})
.then(
    console.log("MongoDB Successfully Connected"),
app.listen(port, ()=> {
    console.log(`Backend is running on Port ${port}`)
})).catch((error)=>{
    console.log(error)
})
