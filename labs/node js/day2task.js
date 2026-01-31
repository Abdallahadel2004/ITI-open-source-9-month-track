import console from "console";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const app=express();
app.use(express.json());


let comments=[{id:1,author:"abdallah",content:"hello world"},
    {id:2,author:"ahmed",content:"hello world"},
    {id:3,author:"ali",content:"hello world"},

];
app.get("/home",(req,res)=>{
    const myfile=fileURLToPath(import.meta.url);
    const dir=path.dirname(myfile);
    const myhome=path.join(dir,"home.html");
    res.sendFile(myhome);
})

app.get("/comments",(req,res)=>{
    res.json(comments);
})
app.get("/comments/:id",(req,res)=>{
    const userid=req.params.id;
    const user=comments.find(comment=>comment.id==userid);
    if(user){
        res.json(user);
    }else{
        res.status(404).send("comment not found");
    }
})

app.post("/comments",(req,res)=>{
    req.body.id=comments.length+1;
    if(req.body.author===""||req.body.content===""){
        res.status(400).send("author and content are required");
    }else{
    comments.push(req.body);
    res.status(201).send("comment added");}
})

app.put("/comments/:id",(req,res)=>{
    const userid=req.params.id;
    const updateduser=comments.find(comment=>comment.id==userid);
    if(req.body.author===""||req.body.content===""){
        res.status(400).send("author and content are required");
    }else if(updateduser){
        updateduser.author=req.body.author;
        updateduser.content=req.body.content;
        res.status(200).send("comment updated");
    }else{
        res.status(404).send("comment not found");
    }
})

app.delete("/comments/:id",(req,res)=>{
    const userid=req.params.id;
    const delteuser=comments.filter(comment=>comment.id!=userid);
    if(delteuser.length==comments.length){
        res.status(404).send("comment not found");
    }else{
        res.status(200).send("comment deleted");
        comments=delteuser;
    }
})



app.listen(3000,()=>{
    console.log("server is running on port 3000");
});