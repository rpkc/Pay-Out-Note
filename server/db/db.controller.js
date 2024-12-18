import mongoose from "mongoose";
import Notes from "./db.schema.js";

export const addData=async (req,res)=>{
    var NotedData=Notes(req.body);
    try {
        await NotedData.save();
        res.status(200).json({success:true,data:NotedData});    
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
}