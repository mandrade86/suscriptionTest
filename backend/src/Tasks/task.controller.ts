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

    if (tasks.length === 0) {
      return res.status(200).json({
        message: "No tasks found",
        data: [],
      });
    }

    res.status(200).json({
      message: "Tasks list found!",
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks" });
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const task = await createTaskService(req.body);

    res.status(201).json({
      message: "Task created successfully",
      data: task,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating task" });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const task = await updateTaskService(req.params.id, req.body);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({
      message: "Task updated successfully",
      data: task,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating task" });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const task = await deleteTaskService(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Error deleting task" });
  }
};
