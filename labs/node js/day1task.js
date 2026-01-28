const fs = require("fs");
let posts = fs.readFileSync("labs/node js/posts.json","utf-8");
posts = JSON.parse(posts);

function savechanges(){
    fs.writeFileSync("labs/node js/posts.json",JSON.stringify(posts));
}

const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url === "/posts" && req.method === "GET") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(posts));

    }else if(req.url=="/posts" && req.method=="POST"){
        req.on("data",(chunck)=>{
            res.setHeader("Content-Type", "application/json")
            const newpost=JSON.parse(chunck);
            const isFounded=posts.find(post=>post.id==newpost.id);
            if(newpost.title===""||newpost.content==="" || newpost.id===undefined){
                res.end("missing required fields");
                res.statusCode=400;
            }
            else if(isFounded){
                res.end("the post already exists");
                res.statusCode=409;
            }else{
                newpost.createdAt = new Date().toISOString();
                posts.push(newpost);
                res.end("the post is created");
                res.statusCode=201;
                savechanges();
            }
        })
    } else if(req.url=="/posts" && req.method=="PUT"){
        req.on("data",(chunck)=>{
            res.setHeader("content-type","application/json");
            const updatedpost=JSON.parse(chunck);
            const isfounded=posts.find(post=>post.id==updatedpost.id);
            if(updatedpost.title===""||updatedpost.content==="" || updatedpost.id===undefined){
                res.end("missing required fields");
                res.statusCode=400;
            }
            else if(isfounded){
                isfounded.title=updatedpost.title;
                isfounded.content=updatedpost.content;
                isfounded.updatedAt = new Date().toISOString();
                res.end("the post is updated successfully");
                res.statusCode=200;
                savechanges();
            }else{
                res.end("the post is not found");
                res.statusCode=404;
            }
        })
    }else if(req.url=="/posts"&& req.method=="DELETE"){
        req.on("data",(chunck)=>{
res.setHeader("content-type","application/json");
const deletedpost=JSON.parse(chunck);
const isfounded=posts.filter(post=>post.id!=deletedpost.id);
if(isfounded.length===posts.length){
    res.end("the post is not found");
    res.statusCode=404;
}else{
    res.end("the post is deleted successfully");
    res.statusCode=204;
    posts=isfounded;
    savechanges();
}
        })
    }//single post
    else if(req.url.startsWith("/posts/") && req.method=="GET"){
        res.setHeader("content-type","application/json");
        const postid=req.url.split("/")[2];
        const post=posts.find(post=>post.id==postid);
        if(post){
            res.end(JSON.stringify(post));
            res.statusCode=200;
        }else{
            res.end("the post is not found");  
            res.statusCode=404;
        }
    }
    
})



server.listen(3000,()=>{
    console.log("server is running on port 3000");
})