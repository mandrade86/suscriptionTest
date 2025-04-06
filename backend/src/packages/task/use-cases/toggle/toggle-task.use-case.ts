import { ITaskRepository } from '../../../../domain/repositories';
import { NotFoundException, UnprocessableContentException } from '../../../../exceptions';
import { Types } from "mongoose";

export class ToggleTaskUseCase {
  private repository!: ITaskRepository;
  constructor(repository: ITaskRepository) {
    this.repository = repository;
  }

  async handle(taskId: string) {
    try {

      const objId = new Types.ObjectId(taskId);
      const task = await this.repository.findOne({ _id: objId });
  
      if (!task) {
        throw new NotFoundException('Task not found');
      }
      let updObj: {
        completed: boolean,
        completedAt: Date | null
      } = { completed: !task.completed,  completedAt: null };
      if(!task.completed) updObj.completedAt = new Date()

      await this.repository.updateOne({ _id: objId }, updObj);
      return {
        message: "Task updated successfully",
        task: updObj
      };
    } catch (error: any) {
      throw new UnprocessableContentException(error.message || 'Unprocessable Entity');
    }
  }
}
