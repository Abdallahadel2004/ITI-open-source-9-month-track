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
                res.statusCode=400;
                res.end("missing required fields");
            }
            else if(isFounded){
                res.statusCode=409;
                res.end("the post already exists");
            }else{
                newpost.createdAt = new Date().toISOString();
                posts.push(newpost);
                res.statusCode=201;
                res.end("the post is created");
                savechanges();
            }
        })
    } else if(req.url=="/posts" && req.method=="PUT"){
        req.on("data",(chunck)=>{
            res.setHeader("content-type","application/json");
            const updatedpost=JSON.parse(chunck);
            const isfounded=posts.find(post=>post.id==updatedpost.id);
            if(updatedpost.title===""||updatedpost.content==="" || updatedpost.id===undefined){
                res.statusCode=400;
                res.end("missing required fields");
            }
            else if(isfounded){
                isfounded.title=updatedpost.title;
                isfounded.content=updatedpost.content;
                isfounded.updatedAt = new Date().toISOString();
                res.statusCode=200;
                res.end("the post is updated successfully");
                savechanges();
            }else{
                res.statusCode=404;
                res.end("the post is not found");
            }
        })
    }else if(req.url=="/posts"&& req.method=="DELETE"){
        req.on("data",(chunck)=>{
res.setHeader("content-type","application/json");
const deletedpost=JSON.parse(chunck);
const isfounded=posts.filter(post=>post.id!=deletedpost.id);
if(isfounded.length===posts.length){
    res.statusCode=404;
    res.end("the post is not found");
}else{
    res.statusCode=204;
    res.end("the post is deleted successfully");
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
            res.statusCode=200;
            res.end(JSON.stringify(post));
        }else{
            res.statusCode=404;
            res.end("the post is not found");  
        }
    }
    
})



server.listen(3000,()=>{
    console.log("server is running on port 3000");
})