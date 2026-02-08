import joi from "joi";

const userValidation=joi.object({
    name:joi.string().required().min(3).max(30),
    email:joi.string().email().required(),
    password:joi.string().required().min(2).max(30)
});

export default userValidation;