const getSelectedHotel = require("../controllers/hotels/singleHotel.controller")
const express=require('express')

module.exports=(app)=>{
    app.get('/api/v1/hotels/:id',getSelectedHotel)
}
// module.exports=router