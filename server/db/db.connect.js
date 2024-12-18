/**
 * 
 * This file connects to mongoDB Atlas Console
 * 
 */

import mongoose from "mongoose";

export const connectDB=()=>{
    mongoose.connect(process.env.MONGO_DB_URI)
    .then(()=>{
        console.log("DB Connected");// if connected properly
    }).catch((err)=>{
        console.log("DB not Connected "+err.message);// if not connected
    })

}