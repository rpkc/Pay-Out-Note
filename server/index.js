import express from "express";
import cors from "cors";
import { connectDB } from "./db/db.connect.js";
import dbRoute from "./db/db.router.js";
import dotenv from 'dotenv';

const server = express();
server.use(express.json());
dotenv.config();




server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Replace with the actual origin
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  });

server.use('/',dbRoute);
server.use(cors({}));

server.listen(5000,()=>{
    console.log("Server Started");
    connectDB()
})