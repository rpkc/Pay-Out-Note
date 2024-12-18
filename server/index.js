import express from "express";
import { connectDB } from "./db/db.connect.js";
import Notes from "./db/db.schema.js";

const server = express();
server.use(express.json());

server.get('/',(req,res)=>{
    res.send("Hi from server");
})


server.post('/',async (req,res)=>{
    var NotedData=Notes(req.body);
    try {
        NotedData.save();
        res.status(200).json({success:true,data:NotedData});    
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
    
})


server.listen(5000,()=>{
    console.log("Server Started");
    connectDB()
})