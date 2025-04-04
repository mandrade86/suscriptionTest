import { Model } from 'mongoose';
import { ITask } from '../interfaces/task.interface';
import { CreateTaskDto, UpdateTaskDto } from '../dtos/task.dto';

export interface ITaskRepository {
  create(task: CreateTaskDto): Promise<ITask>;
  findAll(): Promise<ITask[]>;
  findById(id: string): Promise<ITask | null>;
  update(id: string, task: UpdateTaskDto): Promise<ITask | null>;
  delete(id: string): Promise<boolean>;
}

export class TaskRepository implements ITaskRepository {
  constructor(private readonly taskModel: Model<ITask>) {}

  async create(task: CreateTaskDto): Promise<ITask> {
    const newTask = new this.taskModel(task);
    return await newTask.save();
  }

  async findAll(): Promise<ITask[]> {
    return await this.taskModel.find().sort({ createdAt: -1 });
  }

  async findById(id: string): Promise<ITask | null> {
    return await this.taskModel.findById(id);
  }

  async update(id: string, task: UpdateTaskDto): Promise<ITask | null> {
    return await this.taskModel.findByIdAndUpdate(
      id,
      { ...task, updatedAt: new Date() },
      { new: true }
    );
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.taskModel.findByIdAndDelete(id);
    return result !== null;
  }
} 