import express, { Router } from "express";
import { create, destroy, list, update } from "./controllers/tasks.controller";

const tasks: Router = express.Router();

tasks.get("/", list);
tasks.post("/", create);
tasks.put("/:id", update);
tasks.delete("/:id", destroy);

export default tasks;