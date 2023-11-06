import { SortOrder } from 'mongoose';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { taskSearchableFields } from './task.constant';
import { ITask, ITaskFilters } from './task.interface';
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

const getAllTask = async (
  filters: ITaskFilters,
  paginationOptions: IPaginationOptions,
): Promise<IGenericResponse<ITask[]>> => {
  // search and filter
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];
  // search
  if (searchTerm) {
    andConditions.push({
      $or: taskSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i', //  case-insensitive
        },
      })),
    });
  }

  // filter
  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  // console.log('checking sortBy', sortBy);
  // console.log('checking sortOrder', sortOrder);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Task.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  // const total = await Task.countDocuments();
  const total = await Task.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

// get single task
const getSingleTask = async (id: string): Promise<ITask | null> => {
  const result = await Task.findById(id);
  return result;
};

// update task service
const updateTask = async (
  id: string,
  payload: Partial<ITask>,
): Promise<ITask | null> => {
  const result = await Task.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

// delete task
const deleteTask = async (id: string): Promise<ITask | null> => {
  const result = await Task.findByIdAndDelete(id);
  return result;
};

export const TaskService = {
  createTask,
  getAllTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
