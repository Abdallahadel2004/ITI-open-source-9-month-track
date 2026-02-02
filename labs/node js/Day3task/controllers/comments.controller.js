import { Comment } from "../database/Models/comments.model.js";

const getComments=async(req,res)=>{
    const comments=await Comment.find({user:req.user._id});
    res.status(200).json({
        message:"List of your comments",
        data:comments
    })
}
const createComments=async(req,res)=>{
    let newcomment=await Comment.insertMany({...req.body,user:req.user._id,posts:req.params.postid});
    res.status(201).json({
        message:"Comment created successfully",
        data:newcomment
    })
}
const updateComments=async(req,res)=>{
    let updatedcomment=await Comment.findOneAndUpdate({
        _id:req.params.id,
        user:req.user._id
    },req.body,{new:true});
    if(!updatedcomment){
        return res.status(404).json({
            message:"Comment not found or not yours"
        })
    }
    res.status(200).json({
        message:"Comment updated successfully",
        data:updatedcomment
    })
}
const deleteComments=async(req,res)=>{
    const deletecomment=await Comment.findOneAndDelete({
        _id:req.params.id,
        user:req.user._id
    })
    if(!deletecomment){
        return res.status(404).json({
            message:"Comment not found "
        })
    }
    res.status(200).json({
        message:"Comment deleted successfully",
        data:deletecomment
    })
}
export {getComments,createComments,updateComments,deleteComments};