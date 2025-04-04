import { Router } from 'express';
import { createRoute } from './create.route';
import { getAll } from './getAll.route';
import { updateRoute } from './update.route';
import { deleteRoute } from './delete.route';

export const taskRoutes = Router();

taskRoutes.use(createRoute);
taskRoutes.use(getAll);
taskRoutes.use(updateRoute);
taskRoutes.use(deleteRoute);
