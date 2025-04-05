import { useEffect, useState } from "react";
import { Task } from "./types";
import { fetchTasksApi, createTaskApi } from "./api";

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

  return { tasks, loading, addTask };
};