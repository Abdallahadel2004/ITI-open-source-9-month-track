import express from "express";
const postsRoutes=express.Router();
import { getPosts, createPosts, updatePosts, deletePosts } from "../controllers/posts.controller.js";
import verifyToken from "../../Middleware/verfiyToken.js";

postsRoutes.use(verifyToken);

//postsRoutes.get("/posts",getPosts);
postsRoutes.get("/posts",getPosts);
postsRoutes.post("/posts",createPosts);
postsRoutes.put("/posts/:id",updatePosts);
postsRoutes.delete("/posts/:id",deletePosts);
//postsRoutes.get("/posts/:id",getPostById);
export default postsRoutes;