import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import serverRouter from './routes/servers.js';
import cors from 'cors';
import  './models/users.js';
import  './db.js';
import './controllers/authUser.js';

const app = express();
const PORT = 3000;
const HOST = 'localhost';

app.use(cors());

app.use(express.static('public'));

app.use('/api/products', serverRouter);

app.listen(PORT, HOST, () => {
  console.log(`Server listens http://${HOST}:${PORT}`);

})