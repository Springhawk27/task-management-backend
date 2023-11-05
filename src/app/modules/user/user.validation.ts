import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email(),
    role: z.string().optional(),
    password: z.string().optional(),
  }),
});

export const UserValidation = {
  createUserZodSchema,
};
