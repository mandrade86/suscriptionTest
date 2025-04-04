import express from "express";
import cors from "cors";
import { Schema, model } from "mongoose";
import { connectDB } from "./Config/db";

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

interface ITask {
  title: string;
  completed: boolean;
}

const taskSchema = new Schema<ITask>({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const Task = model<ITask>("Task", taskSchema);

app.post("/task", (req, res) => {
  const newTask = new Task({
    title: req.body.title,
    completed: req.body.completed,
  });
  newTask.save();
  res.status(201).json(newTask);
});

app.get("/tasks", async (req, res) => {
  const tasks = Task.find();
  res.json(tasks);
});

app.listen(3001, () => console.log("Server running on port 3001"));
