import express from "express";
import { connectDB } from "./db/db.connect.js";
import dbRoute from "./db/db.router.js";

const server = express();
server.use(express.json());

server.use('/',dbRoute);

server.listen(5000,()=>{
    console.log("Server Started");
    connectDB()
})