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
router.get('/:id', TaskController.getSingleTask);

router.patch(
  '/:id',
  validateRequest(TaskValidation.updateTaskZodSchema),
  TaskController.updateTask,
);
router.delete('/:id', TaskController.deleteTask);
router.get('/', TaskController.getAllTasks);

export const TaskRoutes = router;
