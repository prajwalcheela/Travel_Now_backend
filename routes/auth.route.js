const logIn = require("../controllers/auth/login.controller")
const signUp = require("../controllers/auth/signup.controller")

module.exports=(app)=>{
    app.post("/api/v1/auth/register",signUp) //For registration
    app.post("/api/v1/auth/login",logIn) // for LogIn
}