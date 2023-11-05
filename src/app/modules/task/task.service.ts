import { ITask } from './task.interface';
import { Task } from './task.model';
import { generateTaskId } from './task.utils';

const createTask = async (task: ITask): Promise<ITask | null> => {
  // auto generated incremental id
  const id = await generateTaskId();

  task.id = id;

  const createdTask = await Task.create(task);
  if (!createdTask) {
    throw new Error('Failed to create task');
  }
  return createdTask;
};

// delete task
const deleteTask = async (id: string): Promise<ITask | null> => {
  const result = await Task.findByIdAndDelete(id);
  return result;
};

export const TaskService = {
  createTask,
  deleteTask,
};
