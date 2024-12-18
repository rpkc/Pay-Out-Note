import express from 'express';
import { addNote,showNotes } from './db.controller.js';

const dbRoute=express.Router();

dbRoute.post('/',addNote);
dbRoute.get('/',showNotes);


export default dbRoute;