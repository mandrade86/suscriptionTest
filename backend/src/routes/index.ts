import express, { Router } from "express";
import tasks from "./tasks";

const api: Router = express.Router();

api.use("/tasks", tasks);

export default api;