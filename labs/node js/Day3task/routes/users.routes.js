import express from "express";
const usersRoutes=express.Router();
import { signupUser, signinUser } from "../controllers/users.controller.js";
import hashpassword from "../../Middleware/hashpassword.js";

usersRoutes.post("/users/signup",hashpassword,signupUser);
usersRoutes.post("/users/signin",signinUser);

export default usersRoutes;