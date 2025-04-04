import mongoose, { Schema, Document, model } from "mongoose";

export interface ITask extends Document {
  title: string;
  completed: boolean;
}

const taskSchema = new Schema<ITask>({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export const Task = model<ITask>("Task", taskSchema);