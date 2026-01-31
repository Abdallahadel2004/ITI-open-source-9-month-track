import mongoose from "mongoose";
export const dbconnect = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/posts")
        .then(() => console.log("Connected to database"))
        .catch((err) => console.log(err));
};