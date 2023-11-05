import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { TaskController } from './task.controller';
import { TaskValidation } from './task.validation';

const router = express.Router();

router.post(
  '/create-task',
  validateRequest(TaskValidation.createTaskZodSchema),
  TaskController.createTask,
);
router.delete('/:id', TaskController.deleteTask);

export const TaskRoutes = router;
