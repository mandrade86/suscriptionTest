export type Task = {
  _id: string;
  title: string;
  type: string;
  deadline: string;
  completed: boolean;
  priority: 1 | 2 | 3;
  description?: string;
  tags?: string[];
};

export type PaginatedTasksResponse = {
  tasks: Task[];
  total: number;
};

export type CreateTaskDTO = Omit<Task, "_id">;

export type UpdateTaskDTO = Partial<Task> & { _id: string };
