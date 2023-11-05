// users.controller.ts
import { Request, Response } from 'express';
import { TaskService } from './task.service';

const createTask = async (req: Request, res: Response) => {
  try {
    const task = req.body;
    const result = await TaskService.createTask(task);
    res.status(200).json({
      success: true,
      message: 'Task created successfully',
      data: result,
    });
  } catch (err) {
    // console.log(err)
    res.status(400).json({
      success: false,
      message: 'Failed to create task',
    });
  }
};

export const TaskController = {
  createTask,
};
