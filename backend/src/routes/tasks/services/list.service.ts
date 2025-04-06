import { TaskRepository } from "../../../repositories/tasks/task.repository";

export class ListTasksService {
  private taskRepository: TaskRepository;

  constructor() {
    this.taskRepository = new TaskRepository();
  }
  async list(page: number) {
    try {
      return await this.taskRepository.findAll(page);
    } catch (error: any) {
      throw new Error(`${error.message ? error.message : "Failed to list tasks"}`);
    }
  }
}