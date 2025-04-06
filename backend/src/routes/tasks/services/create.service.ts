import { TaskRepository } from "../../../repositories/tasks/task.repository";
import { ITask } from "../models/task.model";

export class CreateTaskService {
  private taskRepository: TaskRepository;

  constructor() {
    this.taskRepository = new TaskRepository();
  }

  async create(taskData: ITask) {
    try {
      return await this.taskRepository.create(taskData);
    } catch (error: any) {
      throw new Error(error.message || "Failed to create task");
    }
  }
}