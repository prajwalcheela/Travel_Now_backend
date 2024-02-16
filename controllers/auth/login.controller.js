const User = require("../../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { SECRET_KEY } = require("../../configs/secret_key.congig")

const logIn= async(req,res)=>{
    try{
        const user= await User.findOne({number:req.body.number})
        !user && res.send({message:"enter a valid number"})
        const passwordMatch=bcrypt.compareSync(req.body.password,user.password)
        // console.log(passwordMatch)
        // !passwordMatch &&  res.send("invalid password")
        if (!passwordMatch){
            return res.status(401).send('invalid password')
        }
        let accessToken = jwt.sign({username:user.username},SECRET_KEY,{expiresIn:"2hrs"})
        // console.log(SECRET_KEY)
        const{password,...rest}=user._doc
        res.send({...rest,accessToken})

    }catch(err){
        res.status(401).send(err)
    }
}
module.exports=logIn