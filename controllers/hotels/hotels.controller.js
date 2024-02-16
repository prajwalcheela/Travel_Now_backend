const Hotel = require("../../models/hotel.model")

const getAllHotels=async (req,res)=>{
    const selectedCategory= req.query.category
    try{
       if(selectedCategory){
        const hotels=await Hotel.find({category:selectedCategory})
        res.send(hotels)
       }else{
        const hotels=await Hotel.find({})
        res.send(hotels)
        // console.log(hotels)
       }
       
    }catch(err){
        res.status(400).send({message:err.message})
    }
}

module.exports=getAllHotels