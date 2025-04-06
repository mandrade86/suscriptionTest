import { ApiRequestHandler } from "../lib/ApiRequestHandler";
import { PaginatedTasksResponse } from "../types/tasks";

export async function fetchTasks(): Promise<PaginatedTasksResponse> {
  return await ApiRequestHandler({ path: "/tasks" });
}
