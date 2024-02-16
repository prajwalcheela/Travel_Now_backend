const getAllHotels = require("../controllers/hotels/hotels.controller")

module.exports=(app)=>{
    app.get('/api/v1/hotels',getAllHotels);
}