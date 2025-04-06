import { NotFoundError } from "../../../errors/HttpError";
import { TaskRepository } from "../../../repositories/tasks/task.repository";
import { ITask } from "../models/task.model";

export class UpdateTaskService {
  private taskRepository: TaskRepository;

  constructor() {
    this.taskRepository = new TaskRepository();
  }

  async update(id: string, taskData: ITask) {
    const updatedTask = await this.taskRepository.update(id, taskData);
    if (!updatedTask) throw new NotFoundError("Task not found");

    return updatedTask;
  }
}
