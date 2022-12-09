import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

// Postman
// .env
// separate DB User
// .gitignore
// Router - groups

const db = process.env.URL

mongoose
    .connect(db)
    .then((res) => {
        console.log('Connected to db');
    })
    .catch((error) => console.log(error));