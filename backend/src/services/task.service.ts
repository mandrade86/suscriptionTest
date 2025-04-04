import { Task, ITask } from "../models/task.model";

export const getAllTasks = async (): Promise<ITask[]> => {
  return await Task.find();
};

export const createTask = async (title: string): Promise<ITask> => {
  const newTask = new Task({ title });
  return await newTask.save();
};

export const updateTask = async (id: string, updates: Partial<ITask>): Promise<ITask | null> => {
  return await Task.findByIdAndUpdate(id, updates, { new: true });
};

export const deleteTask = async (id: string): Promise<void> => {
  await Task.findByIdAndDelete(id);
};