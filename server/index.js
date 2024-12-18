import express from "express";
import { connectDB } from "./db/db.connect.js";
import dbRoute from "./db/db.router.js";
import dotenv from 'dotenv';

const server = express();
server.use(express.json());
dotenv.config();

server.use('/',dbRoute);

server.listen(5000,()=>{
    console.log("Server Started");
    connectDB()
})