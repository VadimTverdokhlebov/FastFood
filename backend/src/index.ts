import express from 'express';
import cors from 'cors';
import path from 'path';
import connectToDataBase from './db/connectToDataBase';
import config from './config';
import indexRouter from './routes/indexRouter';
import errorsMiddleware from './middleware/errorsMiddleware';

async function startServer() {
  const corsOptions = {
    origin: config.origin,
    credentials: true,
    optionSuccessStatus: 200,
  };

  const app = express();
  const publicPath = path.join(__dirname, 'public');

  app.use(express.static(publicPath));
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(errorsMiddleware);

  indexRouter(app);

  const PORT = config.port;

  app.listen(PORT, () => {
    console.log(`Server listens http://localhost:${PORT}`);
  });
}

connectToDataBase()
  .then(() => startServer());
