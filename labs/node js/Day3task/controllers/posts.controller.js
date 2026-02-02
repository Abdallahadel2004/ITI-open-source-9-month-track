import { Post } from "../Database/Models/posts.model.js";

const getPosts=async(req,res)=>{
    const posts=await Post.find({author:req.user._id});
    res.status(200).json({
        message:"List of posts",
        data:posts
    })
}


const createPosts=async(req,res)=>{
    let newpost=await Post.insertMany({...req.body,author:req.user._id});
    res.status(201).json({
        message:"Post created successfully",
        data:newpost
    })
}
const updatePosts=async(req,res)=>{
    let updatedpost=await Post.findOneAndUpdate({
        _id:req.params.id,
        author:req.user._id
    },req.body,{new:true});
    res.status(200).json({
        message:"Post updated successfully",
        data:updatedpost
    })
    if(!updatedpost){
        return res.status(404).json({
            message:"Post not found"
        })
    }
}

const deletePosts=async(req,res)=>{
    const deletepost=await Post.findOneAndDelete({
        _id:req.params.id,
        author:req.user._id
    })
    res.status(200).json({
        message:"Post deleted successfully",
        data:deletepost
    })
    if(!deletepost){
        return res.status(404).json({
            message:"Post not found"
        })
    }
}

/*const getPostById=async(req,res)=>{
    const postid=req.params.id;
    const post=await Post.findById(postid);
    res.status(200).json({
        message:"Post found",
        data:post
    })
    if(!post){
        return res.status(404).json({
            message:"Post not found"
        })
    }
}*/

export {getPosts,createPosts,updatePosts,deletePosts};