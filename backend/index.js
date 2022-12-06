import express from 'express';
import serverRouter from './routes/servers.js';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;
const HOST = 'localhost';
const db = 'mongodb+srv://vadim_tverdokhlebov:Vado121212@cluster0.ccfvd.mongodb.net/node_fastfood?retryWrites=true&w=majority';

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log('Connected to DB'))
  .catch((error) => console.log(error));

app.use(cors());

app.use(express.static('public'));

app.use('/api', serverRouter);

app.listen(PORT, HOST, () => {
  console.log(`Server listens http://${HOST}:${PORT}`);

})