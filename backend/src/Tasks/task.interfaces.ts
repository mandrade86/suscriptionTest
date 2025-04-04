export interface ITask {
  title: string;
  completed: boolean;
}

export interface CreateTaskDto {
  title: string;
  completed?: boolean;
}

export interface UpdateTaskDto {
  title?: string;
  completed?: boolean;
}
