import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/ProjectPlanningRoutes.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());
app.use(router);


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", err => console.log(`error: ${err}`));
db.once("open", () => app.listen(PORT, () => 
  console.log(`server running on port ${PORT}`)
));
