// users.model.ts
import { Model, Schema, model } from 'mongoose';
import { IUser } from './user.interface';

// Create a new Model type that knows about IUserMethods...
type UserModel = Model<IUser, object>;

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// 3. Create a Model.
export const User = model<IUser, UserModel>('User', userSchema);
