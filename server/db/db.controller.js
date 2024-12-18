import mongoose from "mongoose";
import Notes from "./db.schema.js";

export const addNote=async (req,res)=>{
    var NotedData=Notes(req.body);
    try {
        await NotedData.save();
        res.status(200).json({success:true,data:NotedData});    
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
}

export const showNotes=async(req,res)=>{
    
    try {
    var NotesData=await Notes.find({});
    res.status(200).json({success:true,data:NotesData});
        
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
}

export const updateNote=async(req,res)=>{
    const {id}=req.params;
    const value=req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid Product Id" });
	}

    try {
        const updateNotes= await Notes.findByIdAndUpdate(id,value,{new:true});
        res.status(200).json({success:true,data:updateNotes});
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
}

export const deleteNote=async (req,res)=>{
    const {id}=req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid Product Id" });}
    
    try {
    await Notes.findByIdAndDelete(id);
    res.status(200).json({success:false,message:"Note Deleted"});

    } catch (error) {
        res.status(500).json({success:true,message:error.message});
    }
}


// export const addNote;