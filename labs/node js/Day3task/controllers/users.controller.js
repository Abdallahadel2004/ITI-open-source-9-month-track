import { User } from "../database/Models/users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendEmail from "../Email/email.js";
import userEmitter from "../events/user.events.js";

const signupUser=async(req,res)=>{
    let user=await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({message:"User already exists sign in instead"});
    }
    let newuser=await User.create(req.body);
    userEmitter.emit("signup",newuser);
    await newuser.save();
    sendEmail(newuser.email,newuser._id);
    res.status(201).json({
        message:"User signed up successfully, please check your email for verification",
        data:newuser  
    })
}
const signinUser=async(req,res)=>{
    const user=await User.findOne({email:req.body.email});
    if(!user){
        return res.status(401).json({message:"User not found"});
    }
    const checkPassword=await bcrypt.compare(req.body.password,user.password);
    if(!checkPassword){
        return res.status(401).json({message:"Invalid password or email"});   
    }
    if(!user.isConfirmed){
        return res.status(401).json({message:"Email not verified, please check your email for verification"});
    }
    const token=jwt.sign({_id:user._id,role:user.role},"iti")
    res.status(200).json({
        message:"welcome back",
        data:token
    })
}

const verifyEmail=async(req,res)=>{
    jwt.verify(req.params.email,"newemail",async(err,decoded)=>{
        if(err){
            return res.status(401).json({message:"Invalid email"});
        }
        await User.findOneAndUpdate({email:decoded},{isConfirmed:true});
        res.status(200).json({message:"Email verified successfully"});
    });
}

export {signupUser,signinUser,verifyEmail}; 