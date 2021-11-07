import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`running on ${PORT}`));

app.get('/', (req, res) => {
  res.send(
    '<h1>Hello World!</h1>',
  );
});
