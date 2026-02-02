import mongoose ,{ Schema, model } from "mongoose";

const postSchema =new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },  
},{
    timestamps:true,
    versionKey:false
})
export const Post = mongoose.model("Post", postSchema);