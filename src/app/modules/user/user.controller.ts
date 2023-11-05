// users.controller.ts
import { Request, Response } from 'express';
import usersService from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;
    const result = await usersService.createUser(user);
    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (err) {
    // console.log(err)
    res.status(400).json({
      success: false,
      message: 'Failed to create user',
    });
  }
};

export const UserController = {
  createUser,
};
