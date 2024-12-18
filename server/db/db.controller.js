import mongoose from "mongoose";
import Notes from "./db.schema.js";


export const totalAmount=async (req,res)=>{
    res.header('Access-Control-Allow-Origin', '*')
    await Notes.aggregate([
        { $group: { _id: null, total: { $sum: '$amount' } } }
      ])
      .then(result => {
        if (result.length > 0) {
          res.status(200).json({success:true,data:Number(result[0].total)}) 
        } else {
            res.status(404).json({success:false,data:0}) 
        }
      })
      .catch(err => {
        res.status(500).json({success:false,message:err.message}) 
      });
}

export const addNote=async (req,res)=>{
    // res.header('Access-Control-Allow-Origin', '*')
    var NotedData=Notes(req.body);
    try {
        await NotedData.save();
        res.status(200).json({success:true,data:NotedData});    
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
}

export const showNotes=async(req,res)=>{
    res.header('Access-Control-Allow-Origin', '*')
    try {
    var NotesData=await Notes.find({});
    res.status(200).json({success:true,data:NotesData});
        
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
}

export const updateNote=async(req,res)=>{
    res.header('Access-Control-Allow-Origin', '*')
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
    res.header('Access-Control-Allow-Origin', '*')
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