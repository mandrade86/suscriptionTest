import { Router } from 'express';
import { validator } from '../../middlewares/validator';
import { Task } from '../../models/task';

const validate = validator({
  id: { isHexadecimal: true }
});

export const deleteRoute = Router().delete('/tasks/:id', validate, async (req, res) => {

  const task = await Task.findByIdAndDelete(req.params.id);
  
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  res.status(204).send();
});
