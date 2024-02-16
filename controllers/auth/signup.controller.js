const bcrypt=require("bcrypt")
const User = require("../../models/user.model")
const registrationSucess = require("../../scripts/email.script")
const sendEmail = require("../../notification/notification")
const signUp= async(req,res)=>{
    const hashedPassword=bcrypt.hashSync(req.body.password,10)
    const obj={
        username:req.body.username,
        email:req.body.email,
        number:req.body.number,
        password:hashedPassword
    }
    try{
        const saveduser=await User(obj).save()
        const {subject,html,text}=registrationSucess(obj.username)
        sendEmail(subject,obj.email,html,text)
        res.status(201).send(saveduser)
    }catch(err){
        res.status(500).send(err)
    }

    
}

module.exports=signUp;