const Wishlist = require("../../models/wishlist.model")

const addToWishlist= async(req,res)=>{
    try{
        const wishlist=await Wishlist.create(req.body)
        res.status(201).send(wishlist)
    }catch(err){
        res.status(400).send(err.message)
    }
}
const  getAllWishlists=async (req,res)=>{
    try{
        const wishlist = await Wishlist.find({})
        // console.log(wishlist)
        wishlist.length ? res.status(200).send(wishlist) : res.status(404).send('Wishlist is empty')
    }catch(err){
        res.status(500).send(err.message)
    }
}
const deleteFromWishlist= async (req,res)=>{
    try{
        await  Wishlist.findByIdAndDelete(req.params.id);
        res.send("deleted sucessfully")
    }catch(err){
        res.status(400).send(err.message)
    }
}



module.exports={addToWishlist,getAllWishlists,deleteFromWishlist}