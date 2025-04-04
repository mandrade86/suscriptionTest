export class CreateTaskDto {
  title: string;
}

export class UpdateTaskDto {
  title?: string;
  completed?: boolean;
}

export class TaskResponseDto {
  _id: string;
  title: string;
  completed: boolean;
  completedOn?: Date;
  createdAt: Date;
  updatedAt: Date;
} 