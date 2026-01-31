import express from "express";
const postsRoutes=express.Router();
import { getPosts, createPosts, updatePosts, deletePosts, getPostById } from "../controllers/posts.controller.js";

postsRoutes.get("/posts",getPosts);
postsRoutes.post("/posts",createPosts);
postsRoutes.put("/posts/:id",updatePosts);
postsRoutes.delete("/posts/:id",deletePosts);
postsRoutes.get("/posts/:id",getPostById);
export default postsRoutes;