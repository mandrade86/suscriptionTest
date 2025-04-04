import { Router } from 'express';
import { Task } from '../../models/task';

export const getAll = Router().get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});
