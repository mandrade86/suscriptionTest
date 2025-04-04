import { model, Schema } from 'mongoose';

interface ITask {
  title: string;
  completed: boolean;
}

export const taskSchema = new Schema<ITask>({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

export const Task = model<ITask>('Task', taskSchema);
