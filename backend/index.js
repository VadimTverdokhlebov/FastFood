import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import productsRouter from './routes/productsRouter.js';
import authRouter from './routes/authRouter.js';
import config from './config.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api', productsRouter);
app.use('/api/auth', authRouter);

startServer();
connectToDataBase();

async function startServer() {

  const PORT = config.port;
  const HOST = config.host;

  app.listen(PORT, HOST, (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(`Server listens http://${HOST}:${PORT}`);
  });
}

async function connectToDataBase() {

  const db = config.databaseURL;

  const optionsDataBase = {
    authSource: "admin",
    user: config.databaseUser,
    pass: config.databasePassword,
  }

  mongoose.set('strictQuery', true);

  mongoose
    .connect(db, optionsDataBase)
    .then(() => {
      console.log('Connected to db');
    })
    .catch((error) => console.log(error));

    // db.createUser(
    //   {
    //   user: "Vadim",
    //   pwd:  "121212",
    //   roles:[{role: "userAdmin" , db:"Fast_food"}]})
}

