import { Router } from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "./task.controller";
import { validate } from "../Middlewares/validate";
import { createTaskSchema, updateTaskSchema } from "./task.validation";

const router = Router();

router.get("/", getTasks);
router.post("/", validate(createTaskSchema), createTask);
router.put("/:id", validate(updateTaskSchema), updateTask);
router.delete("/:id", deleteTask);

export default router;
