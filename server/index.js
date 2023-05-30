import express from 'express'
import Connection from './database/db.js';
import dotenv from 'dotenv';

dotenv.config();
const app=express();

Connection();

const PORT=process.env.PORT;

app.listen(PORT,()=> console.log(`Server running on port ${PORT}`))