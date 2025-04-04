import { ITaskRepository } from '../repositories/task.repository';
import { CreateTaskDto, UpdateTaskDto, TaskResponseDto } from '../dtos/task.dto';
import { ITask } from '../interfaces/task.interface';

export class TaskService {
  constructor(private readonly taskRepository: ITaskRepository) {}

  async createTask(task: CreateTaskDto): Promise<TaskResponseDto> {
    const newTask = await this.taskRepository.create({
      ...task,
      completed: false,
    });
    return this.mapToResponseDto(newTask);
  }

  async getAllTasks(): Promise<TaskResponseDto[]> {
    const tasks = await this.taskRepository.findAll();
    return tasks.map(this.mapToResponseDto);
  }

  async updateTask(id: string, task: UpdateTaskDto): Promise<TaskResponseDto | null> {
    const updatedTask = await this.taskRepository.update(id, {
      ...task,
      completedOn: task.completed ? new Date() : undefined,
    });
    return updatedTask ? this.mapToResponseDto(updatedTask) : null;
  }

  async deleteTask(id: string): Promise<boolean> {
    return await this.taskRepository.delete(id);
  }

  private mapToResponseDto(task: ITask): TaskResponseDto {
    return {
      _id: task._id!,
      title: task.title,
      completed: task.completed,
      completedOn: task.completedOn,
      createdAt: task.createdAt!,
      updatedAt: task.updatedAt!,
    };
  }
} 