import express, { Request, Response } from 'express';
import TaskRoutes from './packages/task/task.routes';
const router = express.Router();

router.use('/task', TaskRoutes);
router.use('/health', (_req: Request, res: Response) => res.status(200).send());

export default router;
