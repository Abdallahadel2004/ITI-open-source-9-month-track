import express from "express";
import { dbconnect } from "./Database/db_connect.js";
import postsRoutes from "./routes/posts.routes.js";

const app = express();
app.use(express.json());
dbconnect();
app.use(postsRoutes);

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})