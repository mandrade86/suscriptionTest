import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { taskRoutes } from './routes/tasks';
import { notFound } from './middlewares/notFound';
import { error } from './middlewares/error';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(taskRoutes);
app.use(notFound());
app.use(error());

(async () => {

  try {
    await mongoose.connect('mongodb://localhost:27017/test');
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error); 
    return;
  }

  app.listen(3001, () => console.log('Server running on port 3001'));
})();
