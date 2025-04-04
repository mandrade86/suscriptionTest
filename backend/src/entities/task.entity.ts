import { Schema, model } from 'mongoose';
import { ITask } from '../interfaces/task.interface';

const taskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    completedOn: { type: Date },
  },
  {
    timestamps: true,
  }
);

export const TaskModel = model<ITask>('Task', taskSchema); 