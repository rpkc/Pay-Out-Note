import express from "express";

const server = express();


server.get('/',(req,res)=>{
    res.send("Hi from server");
})

server.listen(5000,()=>{
    console.log("Server Started");
})