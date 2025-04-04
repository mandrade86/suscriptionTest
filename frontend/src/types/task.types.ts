export interface Task {
  _id: string;
  title: string;
  completed: boolean;
  completedOn?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateTaskDto {
  title: string;
}

export interface UpdateTaskDto {
  title?: string;
  completed?: boolean;
} 