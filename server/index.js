import express from "express";
import { connectDB } from "./config/db.connect.js";

const server = express();


server.get('/',(req,res)=>{
    res.send("Hi from server");
})

server.listen(5000,()=>{
    console.log("Server Started");
    connectDB()
})