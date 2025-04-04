import { Router, Request, Response } from "express";
import * as TaskService from "../services/task.service";

const router = Router();

router.get("/", (req, res) => {
  res.send("API is running 🚀");
});

router.get("/tasks", async (req: Request, res: Response) => {
  try {
    const tasks = await TaskService.getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/task", async (req: Request, res: Response) => {
  try {
    const task = await TaskService.createTask(req.body.title);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
  }
});

router.put("/task/:id", async (req: Request, res: Response) => {
  try {
    const task = await TaskService.updateTask(req.params.id, req.body);
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: "Failed to update task" });
  }
});

router.delete("/task/:id", async (req: Request, res: Response) => {
  try {
    await TaskService.deleteTask(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" });
  }
});

export default router;