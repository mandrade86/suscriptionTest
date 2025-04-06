import { Task } from '../../../../domain/entities';
import { ITaskRepository } from '../../../../domain/repositories';
import { UnprocessableContentException } from '../../../../exceptions';

export class CreateTaskUseCase {
  private repository!: ITaskRepository;
  constructor(repository: ITaskRepository) {
    this.repository = repository;
  }

  async handle(task: Task) {
    try {
      return await this.repository.create(task);
    } catch (error: any) {
      throw new UnprocessableContentException(error.message || 'Unprocessable Entity');
    }
  }
}
