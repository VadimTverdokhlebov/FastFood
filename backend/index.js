import express from "express";
import serverRouter from "./routes/servers.js";
import cors from 'cors';

const app = express();
const PORT = 3000;
const HOST = 'localhost';

app.use(cors());

app.use(express.static('public'));

app.use('/api', serverRouter);

app.listen(PORT, HOST, function () {
    console.log(`Server listens http://${HOST}:${PORT}`);
    
  })