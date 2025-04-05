import { useEffect, useState } from "react";
import { Task } from "./types";
import {
  fetchTasksApi,
  createTaskApi,
  updateTaskApi,
  deleteTaskApi,
} from "./api";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    const data = await fetchTasksApi();
    setTasks(data);
    setLoading(false);
  };

  const addTask = async (title: string) => {
    await createTaskApi(title);
    fetchTasks();
  };

  const updateTask = async (id: string, updates: Partial<Task>) => {
    await updateTaskApi(id, updates);
    fetchTasks();
  };

  const deleteTask = async (id: string) => {
    await deleteTaskApi(id);
    fetchTasks();
  };

  return { tasks, loading, addTask, deleteTask, updateTask };
};
