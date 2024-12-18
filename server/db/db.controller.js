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


// export const addNote;