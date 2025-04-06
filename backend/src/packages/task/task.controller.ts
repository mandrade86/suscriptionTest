import { NextFunction, Request, Response } from 'express';
import { CreateTaskUseCase, CreateTaskDto } from './use-cases/create';
import { ListTaskUseCase, ListTaskDto } from './use-cases/list';
import { ToggleTaskUseCase } from './use-cases/toggle';
import { Task } from '../../domain/entities';

export default class TaskController {
  constructor(private readonly CreateTaskUseCase: CreateTaskUseCase,
    private readonly ListTaskUseCase: ListTaskUseCase,
    private readonly ToggleTaskUseCase: ToggleTaskUseCase
  ) {}

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const task: Task = CreateTaskDto.validate(req.body);
      const response = await this.CreateTaskUseCase.handle(task);
      return res.status(201).json({
        response,
      });
    } catch (error) {
      return next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const filters = ListTaskDto.validate(req.query);
      const response = await this.ListTaskUseCase.handle(filters);
      return res.status(200).json({
        response,
      });
    } catch (error) {
      return next(error);
    }
  }

  async toggle(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const response = await this.ToggleTaskUseCase.handle(id);
      return res.status(200).json({
        response,
      });
    } catch (error) {
      return next(error);
    }
  }
}
