const registrationSucess=(username)=>{
    return{
        subject:`Welcome to TravelNow - Registration Successful`,
        html:`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Registration Success</title>
            <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
            }
            .container {
                max-width: 600px;
                margin: 50px auto;
                padding: 20px;
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h2 {
                color: #333;
            }
            p {
                color: #666;
            }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Registration Successful</h2>
                <h5>Dear ${username},</h5>
                <hr/>
                <p>Welcome to TravelNow! Your registration was successful.</p>
                <p>Thank you for joining our community.</p>
                <hr/>
                <p>Best regards,</p>
                <p>The TravelNow Team</p>
            </div>
        </body>
        </html>
        `
    }

}

module.exports=registrationSucess; 