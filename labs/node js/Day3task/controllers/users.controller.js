import { User } from "../database/Models/users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signupUser=async(req,res)=>{
    let user=await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({message:"User already exists sign in instead"});
    }
    let newuser=await User.insertMany(req.body);
    newuser.password=undefined;
    res.status(201).json({
        message:"User created successfully",
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
        return res.status(401).json({message:"Invalid password"});   
    }
    const token=jwt.sign({_id:user._id,role:user.role},"iti")
    res.status(200).json({
        message:"welcome back",
        data:token
    })
}
export {signupUser,signinUser};