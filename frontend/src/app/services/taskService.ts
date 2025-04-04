import { Task } from "../types/Task";

const API_URL = "http://localhost:3002/task";
const API_URL_TASKS = "http://localhost:3002/tasks";

export const fetchTasks = async (): Promise<Task[]> => {
  const res = await fetch(API_URL_TASKS);
  return res.json();
};

export const addTask = async (title: string): Promise<void> => {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
};

export const deleteTask = async (id: string): Promise<void> => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};

export const updateTask = async (id: string, updates: Partial<Task>): Promise<void> => {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
};