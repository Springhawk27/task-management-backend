// 1. Create an interface representing a document in MongoDB.
export type IUser = {
  id?: string;
  email: string;
  role?: string;
  password?: string;
};
