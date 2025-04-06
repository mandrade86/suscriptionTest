import { model, Schema } from "mongoose";

export interface ITask {
  title: string;
  type: string;
  deadline: string;
  completed: boolean;
  priority: 0 | 1 | 2;
  description?: string;
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

const taskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    type: { type: String, required: true },
    deadline: { type: String, required: true },
    completed: { type: Boolean, default: false },
    priority: { type: Number, enum: [0, 1, 2], default: 1 },
    description: { type: String },
    tags: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

export const TaskModel = model<ITask>("Task", taskSchema);
