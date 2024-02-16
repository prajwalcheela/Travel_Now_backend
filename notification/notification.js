const nodemailer = require("nodemailer")

const  sendEmail=(subject,email,html,text)=>{
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user:process.env.EMAIL_ID,
            pass:process.env.EMAIL_PASSWORD
        }
    })
    let mailOptions={
        from: process.env.EMAIL_ID ,
        to: email,
        subject
    }
    if(html) mailOptions.html=html
    if(text)  mailOptions.text=text
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.log(err)
        }else{
            console.log(`sent to ${info.response}`)
        }
    })
}
module.exports=sendEmail