import { Task } from './task.model';

export const findLastTaskId = async () => {
  const lastUser = await Task.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();
  return lastUser?.id;
};

export const generateTaskId = async () => {
  const currentId = (await findLastTaskId()) || (0).toString().padStart(5, '0');
  const incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  return incrementedId;
};
