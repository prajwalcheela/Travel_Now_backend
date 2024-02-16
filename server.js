const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose');
const cors = require('cors')
const bodyparser=require('body-parser')
const { DB_URL } = require('./configs/db_url.config');
const { PORT } = require('./configs/port.config');
const addHotelsData = require('./routes/importhoteldata.route')
const addCaterogyData=require('./routes/importCategories.route')
const getAllHotels=require( './routes/hotel.route')
const getAllCategories = require('./routes/category.route')
const getSingleHotel = require('./routes/singleHotel.route');
const registerUser = require("./routes/auth.route")
const userLogIn = require("./routes/auth.route")
const wishlist = require("./routes/wishlist.route")

mongoose.connect(DB_URL).then(()=>{
    console.log("successfully connected to DB")
}).catch((err)=>{
    console.log(err.message)
})

const app =express()
app.use(cors());
app.use(bodyparser.json());

app.get('/',(req,res)=>{
    res.send(`<h1 >Welcome to TravelNow api</h1><p>check api documentation for end points</p>`)
})

addHotelsData(app)
addCaterogyData(app)
getAllHotels(app)
getAllCategories(app)
getSingleHotel(app)
registerUser(app)
userLogIn(app)
wishlist(app)


mongoose.connection.once('connected',()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`)
    })
})
