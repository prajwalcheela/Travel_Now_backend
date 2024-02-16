const { default: mongoose } = require("mongoose");

const wishListSchema= mongoose.Schema({
    hotelId:{type:String,required:true}
})

const Wishlist = mongoose.model("Wishlist",wishListSchema);

module.exports=Wishlist