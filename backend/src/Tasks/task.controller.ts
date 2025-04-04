import { Request, Response } from "express";
import {
  createTaskService,
  getTasksService,
  updateTaskService,
  deleteTaskService,
} from "./task.service";

export const getTasks = async (_req: Request, res: Response) => {
  try {
    const tasks = await getTasksService();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error fetching tasks" });
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const task = await createTaskService(req.body);

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "Error creating task" });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const task = await updateTaskService(req.params.id, req.body);

    if (!task) return res.status(404).json({ error: "Task not found" });

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: "Error updating task" });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const task = await deleteTaskService(req.params.id);

    if (!task) return res.status(404).json({ error: "Task not found" });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error deleting task" });
  }
};
