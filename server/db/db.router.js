import express from 'express';
import { addData } from './db.controller.js';

const dbRoute=express.Router();

dbRoute.post('/',addData);



export default dbRoute;