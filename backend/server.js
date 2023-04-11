const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
app.use(express.json())
//Import Routes
const userRoute = require('./routes/users')

//Mount Routes
app.use("/", userRoute)


mongoose.connect(process.env.mongoDBURL).then(
    console.log("MongoDB Successfully Connected"),
app.listen(port, ()=> {
    console.log(`Backend is running on Port ${port}`)
})).catch((error)=>{
    console.log(error)
})
