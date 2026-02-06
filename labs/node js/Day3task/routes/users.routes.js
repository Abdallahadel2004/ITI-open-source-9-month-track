import express from "express";
const usersRoutes=express.Router();
import { signupUser, signinUser, verifyEmail } from "../controllers/users.controller.js";
import hashpassword from "../../Middleware/hashpassword.js";
import { catchErrors } from "../../Middleware/CatchErrors.js";
import { Validation } from "../../Middleware/Validation.js";

usersRoutes.post("/users/signup",Validation,hashpassword,catchErrors(signupUser));
usersRoutes.post("/users/signin",Validation,catchErrors(signinUser));
usersRoutes.get("/users/confirm/:email",catchErrors(verifyEmail));
export default usersRoutes;