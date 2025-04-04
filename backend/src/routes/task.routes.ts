import { Router } from 'express';
import { TaskController } from '../controllers/task.controller';

export const createTaskRoutes = (taskController: TaskController): Router => {
  const router = Router();

  router.post('/task', (req, res) => taskController.createTask(req, res));
  router.get('/tasks', (req, res) => taskController.getAllTasks(req, res));
  router.put('/task/:id', (req, res) => taskController.updateTask(req, res));
  router.delete('/task/:id', (req, res) => taskController.deleteTask(req, res));

  return router;
}; 