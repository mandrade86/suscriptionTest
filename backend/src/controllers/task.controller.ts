import { Request, Response } from 'express';
import { TaskService } from '../services/task.service';
import { CreateTaskDto, UpdateTaskDto } from '../dtos/task.dto';

export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  async createTask(req: Request, res: Response): Promise<void> {
    try {
      const taskDto: CreateTaskDto = req.body;
      const task = await this.taskService.createTask(taskDto);
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create task' });
    }
  }

  async getAllTasks(req: Request, res: Response): Promise<void> {
    try {
      const tasks = await this.taskService.getAllTasks();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tasks' });
    }
  }

  async updateTask(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const taskDto: UpdateTaskDto = req.body;
      const task = await this.taskService.updateTask(id, taskDto);
      
      if (!task) {
        res.status(404).json({ error: 'Task not found' });
        return;
      }
      
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update task' });
    }
  }

  async deleteTask(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const success = await this.taskService.deleteTask(id);
      
      if (!success) {
        res.status(404).json({ error: 'Task not found' });
        return;
      }
      
      res.json({ message: 'Task deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete task' });
    }
  }
} 