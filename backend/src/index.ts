import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose, { Schema, model } from "mongoose";

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

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
