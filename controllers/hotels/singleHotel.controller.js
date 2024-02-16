const Hotel = require("../../models/hotel.model")

const getSelectedHotel=async (req,res)=>{
    const id=req.params.id
    try{
        const hotel = await Hotel.findById(id)
        res.send(hotel)
    }catch(err){
        res.status(404).send({message:err.message})
    }
}

module.exports=getSelectedHotel