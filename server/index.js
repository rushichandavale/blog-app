import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path'
import { fileURLToPath } from 'url';

//components
import Connection from './database/db.js';
import Router from './routes/route.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);



Connection();

app.use(express.static(path.join(__dirname, '../client/build')))
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

app.listen(8000, ()=>{
    console.log("server is running or port 8000")
})