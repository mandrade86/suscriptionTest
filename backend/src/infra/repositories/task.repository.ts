import { Task } from '../../domain/entities';
import { ITaskRepository } from '../../domain/repositories';
import TaskModel from '../database/schemas/Task';
import { BaseRepository } from './base.repository'; 

export class TaskRepository extends BaseRepository<Task> implements ITaskRepository {
  constructor() {
    super(TaskModel);
  }
}
