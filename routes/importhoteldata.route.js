const hotels = require("../db_data/hotels_info")
const Hotel = require("../models/hotel.model")

module.exports=(app)=>{
    app.post('/api/v1/hotelsdata',async (req,res)=>{
        try{
             await Hotel.deleteMany({})
            const hotel = await Hotel.insertMany(hotels.data)
            
            res.send(hotel)
        }catch(err){
            res.status(400).send({message:err.message})
        }
    })
}