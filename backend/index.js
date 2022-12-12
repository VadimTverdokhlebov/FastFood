import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import productsRouter from './routes/productsRouter.js';
import authRouter from './routes/authRouter.js';
import config from './config.js';

// separate DB User
// Router - groups

const PORT = config.port;
const HOST = config.host;
const db = config.databaseURL;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api', productsRouter);
app.use('/api/auth', authRouter);

startServer();
connectToDataBase();

async function startServer() {
  app.listen(PORT, HOST, (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(`Server listens http://${HOST}:${PORT}`);
  });
}

async function connectToDataBase() {

  mongoose.set('strictQuery', true);

  mongoose
    .connect(db)
    .then(() => {
      console.log('Connected to db');
    })
    .catch((error) => console.log(error));
}
