import express from 'express';
import { TaskRepository } from '../../infra/repositories';
const taskRepository = new TaskRepository();
import TaskController from './task.controller';

import { CreateTaskUseCase } from './use-cases/create';
import { ListTaskUseCase } from './use-cases/list';
import { ToggleTaskUseCase } from './use-cases/toggle';

const createUseCase = new CreateTaskUseCase(taskRepository);
const listUseCase = new ListTaskUseCase(taskRepository);
const toggleUseCase = new ToggleTaskUseCase(taskRepository);

const controller = new TaskController(createUseCase, listUseCase, toggleUseCase);

const router = express.Router();

router.route('/').get(controller.list.bind(controller));
router.route('/').post(controller.create.bind(controller));
router.route('/:id/toggle').patch(controller.toggle.bind(controller));

export default router;
