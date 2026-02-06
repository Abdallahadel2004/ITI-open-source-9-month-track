import express from "express";
const usersRoutes=express.Router();
import { signupUser, signinUser, verifyEmail } from "../controllers/users.controller.js";
import hashpassword from "../../Middleware/hashpassword.js";

usersRoutes.post("/users/signup",hashpassword,signupUser);
usersRoutes.post("/users/signin",signinUser);
usersRoutes.get("/users/confirm/:email",verifyEmail);
export default usersRoutes;