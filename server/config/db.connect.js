import mongoose from "mongoose";

export const connectDB=()=>{
    mongoose.connect('mongodb+srv://rpkc:1234@cluster0.xbfml.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>{
        console.log("DB Connected");
    }).catch((err)=>{
        console.log("DB not Connected "+err.message);
    })

}