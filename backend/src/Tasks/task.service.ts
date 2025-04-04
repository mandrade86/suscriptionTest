import { Task } from "./task.model";

export const createTaskService = async (data: any) => {
  const task = new Task(data);
  return await task.save();
};

export const getTasksService = async () => {
  return await Task.find();
};

export const updateTaskService = async (id: string, data: any) => {
  return await Task.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

export const deleteTaskService = async (id: string) => {
  return await Task.findByIdAndDelete(id);
};
