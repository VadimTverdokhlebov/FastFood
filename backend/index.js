import express from 'express';
import cors from 'cors';
import productsRouter from './routes/productsRouter.js';
import connectToDataBase from './db/connectToDataBase.js';
import orderRouter from './routes/orderRouter.js';
import authRouter from './routes/authRouter.js';
import config from './config.js';

// hash password
// check login user generte errors 403

async function startServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.static('public'));

  app.use('/api', orderRouter);
  app.use('/api', productsRouter);
  app.use('/api/auth', authRouter);

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

connectToDataBase()
  .then(() => startServer());
