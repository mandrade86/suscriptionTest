import { Router } from "express";
import { createTask, getTasks, updateTask } from "./task.controller";

const router = Router();

router.post("/", createTask);
router.put("/:id", updateTask);
router.get("/", getTasks);

export default router;