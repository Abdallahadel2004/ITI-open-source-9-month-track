import jwt from "jsonwebtoken";
const verifyToken=(req,res,next)=>{
    const token=req.headers.token
    jwt.verify(token,"iti",async(err,decoded)=>{
        if(err){
            return res.status(401).json({message:"Unauthorized"});
        }
        req.user=decoded;
        next();
    })
}
export default verifyToken;