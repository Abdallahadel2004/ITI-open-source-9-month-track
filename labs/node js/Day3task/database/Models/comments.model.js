import mongoose,{Schema,model} from "mongoose";
const commentSchema=new Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    posts:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
        required:true
    }
},
{
    timestamps:true,
    versionKey:false
}
)
export const Comment = mongoose.model("Comment", commentSchema);