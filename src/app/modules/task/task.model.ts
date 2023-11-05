// users.model.ts
import { Model, Schema, model } from 'mongoose';
import { ITask } from './task.interface';

// Create a new Model type that knows about IUserMethods...
type TaskModel = Model<ITask, object>;

// 2. Create a Schema corresponding to the document interface.
const taskSchema = new Schema<ITask>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// 3. Create a Model.
export const Task = model<ITask, TaskModel>('Task', taskSchema);
