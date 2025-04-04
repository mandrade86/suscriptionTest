import { Schema, model } from "mongoose";
import { ITask } from './task.interface';

const taskSchema = new Schema<ITask>({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export const Task = model<ITask>("Task", taskSchema);