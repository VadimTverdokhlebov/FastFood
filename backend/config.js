import * as dotenv from 'dotenv';
dotenv.config();

export default {

    port: process.env.PORT,
    host: process.env.HOST,
    databaseURL: process.env.DATABASE_URI,
    user: {
        secretKey: process.env.SECRET_KEY,
    }
}