/**
 * 
 * This file is for designing Schema and Model for Database
 * 
 */

import mongoose from "mongoose";

// const [Schema,model]=mongoose;

const noteSchema=new mongoose.Schema({
    "topic":String,
    "amount":Number,
    "note":String
},{
    timestamps:true
});

const Notes = mongoose.model('Notes',noteSchema);

export default Notes;
