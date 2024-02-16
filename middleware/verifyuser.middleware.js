const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../configs/secret_key.congig')

const veriftUser=(req,res,next)=>{
    const token = req.headers["x-access-token"]
    jwt.verify(token,SECRET_KEY,(err,payload)=>{
        if(err){
           return res.send(err.message)
        }
        req.user=payload
        next()
    })
}
module.exports=veriftUser