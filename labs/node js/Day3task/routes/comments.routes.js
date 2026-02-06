import express from "express";
const commentsRoutes=express.Router();
import verifyToken from "../../Middleware/verfiyToken.js";
import { getComments, createComments, updateComments, deleteComments } from "../controllers/comments.controller.js";
import { Validation } from "../../Middleware/Validation.js";
commentsRoutes.use(verifyToken);

commentsRoutes.get("/comments",getComments);
commentsRoutes.post("/comments/:postid",Validation,createComments);
commentsRoutes.put("/comments/:id",updateComments);
commentsRoutes.delete("/comments/:id",deleteComments);
export default commentsRoutes;