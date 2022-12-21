import * as dotenv from 'dotenv';

dotenv.config();

export default {

  port: process.env.PORT,
  host: process.env.HOST,
  databaseURL: process.env.DATABASE_URI,
  databaseUser: process.env.DATABASE_USER,
  databasePassword: process.env.DATABASE_PASSWORD,
  user: {
    secretKey: process.env.SECRET_KEY,
  },
};
