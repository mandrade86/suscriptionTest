import { CreateTaskDTO, PaginatedTasksResponse, Task, UpdateTaskDTO } from "../types/tasks";

export class TaskAdapter {
  async getTasks(page: number): Promise<PaginatedTasksResponse> {
    const response = await fetch(`/api/tasks?page=${page}`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData?.message || "Failed to fetch tasks");
    }

    return response.json();
  }

  async createTask(params: CreateTaskDTO): Promise<Task> {
    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData?.message || "Failed to create task");
    }

    return response.json();
  }

  async updateTask(params: UpdateTaskDTO): Promise<Task> {
    const response = await fetch(`/api/tasks/${params._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData?.message || "Failed to update task");
    }

    return response.json();
  }

  async deleteTask(id: string): Promise<boolean> {
    const response = await fetch(`/api/tasks/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData?.message || "Failed to delete task");
    }

    return response.ok;
  }
}
