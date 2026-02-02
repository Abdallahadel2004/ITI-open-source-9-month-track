import bcrypt from "bcrypt";
const hashpassword=(req,res,next)=>{
    if(!req.body.password){
        return res.status(400).json({message:"Password is required"});
    }
    req.body.password=bcrypt.hashSync(req.body.password,10);
    next();
}
export default hashpassword;