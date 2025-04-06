import { Request, Response } from "express";
import { CreateTaskService } from "../services/create.service";
import { ListTasksService } from "../services/list.service";
import { UpdateTaskService } from "../services/update.service";
import { asyncHandler } from "../../../utils/AsyncHandler";
import { DeleteTaskService } from "../services/delete.service";

export const list = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const service = new ListTasksService();
    const tasks = await service.list(page);
    res.status(200).json(tasks);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const service = new CreateTaskService();
    const taskData = req.body; 
    const newTask = await service.create(taskData);
    res.status(201).json(newTask);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const update = asyncHandler(async (req, res) => {
  const service = new UpdateTaskService();
  const { id } = req.params;
  const taskData = req.body;

  const updatedTask = await service.update(id, taskData);
  res.status(200).json(updatedTask);
});

export const destroy = asyncHandler(async (req, res) => {
  const service = new DeleteTaskService();
  const { id } = req.params;

  await service.delete(id);
  return res.status(200).json({ message: "Task deleted successfully" });
});