import { ITask, TaskModel } from "../../routes/tasks/models/task.model";

const LIMIT = 10

export class TaskRepository {
  async create(taskData: ITask) {
    const task = new TaskModel(taskData);
    await task.save();
    return task
  }

  async findAll(page = 1) {
    const skip = (page - 1) * LIMIT;

    const [tasks, totalItens] = await Promise.all([
      TaskModel.find()
        .sort({ createdAt: "desc" })
        .skip(skip)
        .limit(LIMIT),
      TaskModel.countDocuments()
    ]);

    const total = Math.ceil(totalItens / LIMIT);

    return { tasks, total };
  }

  async findById(id: string) {
    return await TaskModel.findById(id);
  }

  async update(id: string, taskData: ITask) {
    return await TaskModel.findByIdAndUpdate(id, taskData, { new: true, runValidators: true });
  }

  async delete(id: string) {
    return await TaskModel.findByIdAndDelete(id);
  }
}
