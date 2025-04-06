"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Task } from "@/types/tasks";
import { TaskAdapter } from "@/adapters/task.adapter";
import { useApi } from "../hooks/useApi";

type TaskContextType = {
  tasks: Task[];
  total: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  fetchTasks: () => Promise<void>;
};

const TaskContext = createContext<TaskContextType | null>(null);

type TaskProviderProps = {
  children: ReactNode;
  initialTasks?: {
    tasks: Task[];
    total: number;
  };
};

export const TaskProvider = ({ children, initialTasks }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks?.tasks || []);
  const [total, setTotal] = useState<number>(initialTasks?.total || 0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { request } = useApi();
  const adapter = new TaskAdapter();

  const fetchTasks = async () => {
    const result = await request(() => adapter.getTasks(currentPage));
    if (result) {
      setTasks(result.tasks);
      setTotal(result.total);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, total, currentPage, fetchTasks, setCurrentPage }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be used within a TaskProvider");
  return context;
};
