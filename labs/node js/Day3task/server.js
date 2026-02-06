import express from "express";
import { dbconnect } from "./Database/db_connect.js";
import postsRoutes from "./routes/posts.routes.js";
import usersRoutes from "./routes/users.routes.js";
import commentsRoutes from "./routes/comments.routes.js";
import userEmitter from "./events/user.events.js";
const app = express();
app.use(express.json());
dbconnect();
app.use(usersRoutes);
app.use(postsRoutes);
app.use(commentsRoutes);
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})