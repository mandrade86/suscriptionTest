import { useEffect, useState } from "react";
import { Task } from "../types/Task";
import toast from "react-hot-toast";
import * as taskService from "../services/taskService";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const data = await taskService.fetchTasks();
      setTasks(data);
    } catch {
      toast.error("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (title: string) => {
    try {
      await taskService.addTask(title);
      toast.success("Task added 🎉");
      fetchTasks();
    } catch {
      toast.error("Failed to add task");
    }
  };

  const updateTask = async (id: string, updates: Partial<Task>) => {
    try {
      await taskService.updateTask(id, updates);
      toast.success("Task updated ✅");
      fetchTasks();
    } catch {
      toast.error("Failed to update task");
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await taskService.deleteTask(id);
      toast.success("Task deleted 🗑️");
      fetchTasks();
    } catch {
      toast.error("Failed to delete task");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    tasks,
    loading,
    addTask,
    updateTask,
    deleteTask,
    refetch: fetchTasks,
  };
};