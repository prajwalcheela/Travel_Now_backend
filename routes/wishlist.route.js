const { addToWishlist, getAllWishlists, deleteFromWishlist } = require("../controllers/wishlist/wishlist.controller")
const veriftUser = require("../middleware/verifyuser.middleware")

module.exports=(app)=>{
    app.post("/api/v1/wishlist",[veriftUser],addToWishlist)
    app.get("/api/v1/wishlist",[veriftUser],getAllWishlists)
    app.delete("/api/v1/wishlist/:id",[veriftUser],deleteFromWishlist)
}