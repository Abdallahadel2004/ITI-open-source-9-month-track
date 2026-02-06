import nodemailer from "nodemailer";    
import jwt from "jsonwebtoken";


export default async function sendEmail(email,token){
    const transporter=nodemailer.createTransport({
        service:"gmail",
        secure:false,
        auth:{
            user:"abdo96650243@gmail.com",
            pass:"zqre llue wiyk lsru",
        },
    });

    const emailToken=jwt.sign(email,"newemail")

    const mailOptions={
        from:"abdo96650243@gmail.com",
        to:email,
        subject:"Confirm your email",
        html:`<h1>Confirm your email</h1>
        <p>Click on the link to confirm your email: <a href="http://localhost:3000/users/confirm/${emailToken}">Confirm</a></p>`,
    };
    await transporter.sendMail(mailOptions);
}