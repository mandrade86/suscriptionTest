import { Task } from "./task.model";
import { CreateTaskDto, UpdateTaskDto } from "./task.interfaces";

export const createTaskService = async (data: CreateTaskDto) => {
  const task = new Task(data);
  return await task.save();
};

export const getTasksService = async () => {
  return await Task.find();
};

export const updateTaskService = async (id: string, data: UpdateTaskDto) => {
  return await Task.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

export const deleteTaskService = async (id: string) => {
  return await Task.findByIdAndDelete(id);
};
