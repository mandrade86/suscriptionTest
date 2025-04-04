import { Router } from 'express';
import { Task } from '../../models/task';
import { validator } from '../../middlewares/validator';

const validate = validator({
  title: { notEmpty: true },
  completed: { isBoolean: true, optional: true }
});

export const createRoute = Router().post('/tasks', validate, async (req, res) => {
  
  const newTask = new Task({
    title: req.body.title,
    completed: req.body.completed
  });
  
  await newTask.save();
  
  res.status(201).json(newTask);
});
