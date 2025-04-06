import { NotFoundError } from "../../../errors/HttpError";
import { TaskRepository } from "../../../repositories/tasks/task.repository";

export class DeleteTaskService {
  private taskRepository: TaskRepository;

  constructor() {
    this.taskRepository = new TaskRepository();
  }

  async delete(id: string) {
    const deletedTask = await this.taskRepository.delete(id);
    if (!deletedTask) throw new NotFoundError("Task not found");
  }
}
