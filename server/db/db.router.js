import express from 'express';
import { addNote,showNotes,updateNote,deleteNote } from './db.controller.js';

const dbRoute=express.Router();

dbRoute.post('/',addNote);
dbRoute.get('/',showNotes);
dbRoute.put('/:id',updateNote);
dbRoute.delete('/:id',deleteNote);


export default dbRoute;