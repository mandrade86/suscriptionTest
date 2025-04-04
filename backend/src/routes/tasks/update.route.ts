import { Router } from 'express';
import { Task } from '../../models/task';
import { validator } from '../../middlewares/validator';

const validate = validator({
  id: { isHexadecimal: true },
  title: { notEmpty: true, optional: true },
  completed: { isBoolean: true, optional: true }
});

export const updateRoute = Router().patch('/tasks/:id', validate, async (req, res) => {

  const task = await Task.findById(req.params.id);
  
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  if (req.body.title) {
    task.title = req.body.title;
  }
  
  if (req.body.completed !== undefined) {
    task.completed = req.body.completed;
  }
  
  await task.save();
  
  res.json(task);
});
