import mongoose,{Schema,model} from "mongoose";
const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isConfirmed:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        required:true,
        enum:["admin","user"],
        default:"user"
    }
},
{
    timestamps:true,
    versionKey:false
}
)
export const User = mongoose.model("User", userSchema);
