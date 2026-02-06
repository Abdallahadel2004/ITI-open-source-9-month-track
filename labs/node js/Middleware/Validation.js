import userValidation from "../Day3task/validations/UserValidation.js";

export const Validation=(req,res,next)=>{
    const validated=userValidation.validate(req.body);
    if(validated.error){
        return res.status(400).json({message:validated.error.details[0].message});
    }
    next();
}