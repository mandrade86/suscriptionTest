import { ITaskRepository } from '../../../../domain/repositories';
import { UnprocessableContentException } from '../../../../exceptions';
import { ListTaskDto } from './list-task.dto';

export class ListTaskUseCase {
  private repository!: ITaskRepository;
  constructor(repository: ITaskRepository) {
    this.repository = repository;
  }

  async handle(task: ListTaskDto) {
    try {
      return await this.repository.findMany(task);
    } catch (error: any) {
      throw new UnprocessableContentException(error.message || 'Unprocessable Entity');
    }
  }
}
