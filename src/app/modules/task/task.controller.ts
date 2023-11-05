// users.controller.ts
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ITask } from './task.interface';
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

const getSingleTask = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await TaskService.getSingleTask(id);

  sendResponse<ITask>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task Retrieved Successfully',
    data: result,
  });
});

// update task
const updateTask = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await TaskService.updateTask(id, updatedData);

  sendResponse<ITask>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task Updated Successfully',
    data: result,
  });
});

// delete task
const deleteTask = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await TaskService.deleteTask(id);

  sendResponse<ITask>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task Deleted Successfully',
    data: result,
  });
});

export const TaskController = {
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
