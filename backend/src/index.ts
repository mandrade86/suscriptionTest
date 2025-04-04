import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { TaskModel } from './entities/task.entity';
import { TaskRepository } from './repositories/task.repository';
import { TaskService } from './services/task.service';
import { TaskController } from './controllers/task.controller';
import { createTaskRoutes } from './routes/task.routes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect('mongodb://localhost:27017/test')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Dependency injection
const taskRepository = new TaskRepository(TaskModel);
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

// Routes
app.use('/', createTaskRoutes(taskController));

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
