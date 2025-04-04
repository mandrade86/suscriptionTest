import { Router, Request, Response } from "express";
import redis from "../utils/redisClient";
import * as TaskService from "../services/task.service";

const router = Router();
const cacheKey = "tasks";

router.get("/", (req, res) => {
  res.send("API is running 🚀");
});

router.get("/tasks", async (req: Request, res: Response) => {
  try {
    const cachedTasks = await redis.get(cacheKey);

    if (cachedTasks) {
      return res.json(JSON.parse(cachedTasks));
    }

    const tasks = await TaskService.getAllTasks();

    await redis.set(cacheKey, JSON.stringify(tasks), {
      EX: 60,
      NX: true,
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/task", async (req: Request, res: Response) => {
  try {
    const task = await TaskService.createTask(req.body.title);
    await redis.del(cacheKey);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
  }
});

router.put("/task/:id", async (req: Request, res: Response) => {
  try {
    const task = await TaskService.updateTask(req.params.id, req.body);
    await redis.del(cacheKey);
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: "Failed to update task" });
  }
});

router.delete("/task/:id", async (req: Request, res: Response) => {
  try {
    await TaskService.deleteTask(req.params.id);
    await redis.del(cacheKey);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" });
  }
});

export default router;