import express from 'express';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import route from './routes/Routes.js';

dotenv.config();

const app=express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

Connection();

const PORT=process.env.PORT;

app.listen(PORT,()=> console.log(`Server running on port ${PORT}`))