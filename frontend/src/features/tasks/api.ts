import { API_BASE_URL } from "../../config/api";
import { Task } from "./types";

const API_URL = `${API_BASE_URL}/tasks`;

export const fetchTasksApi = async (): Promise<Task[]> => {
  const res = await fetch(API_URL, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const json = await res.json();
  return json.data;
};

export const createTaskApi = async (title: string): Promise<Task> => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
  const json = await res.json();
  return json.data;
};
