/**
 * 
 * This file is for designing Schema and Model for Database
 * 
 */

import mongoose from "mongoose";

const [Schema,model]=mongoose;

const noteSchema=new Schema({
    "topic":String,
    "amount":Number,
    "note":String
},{
    timestamps:true
});

const Notes = model('Notes',noteSchema);

export default Notes;
