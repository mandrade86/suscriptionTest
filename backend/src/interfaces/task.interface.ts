export interface ITask {
  _id?: string;
  title: string;
  completed: boolean;
  completedOn?: Date;
  createdAt?: Date;
  updatedAt?: Date;
} 