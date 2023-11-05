import { z } from 'zod';

const createTaskZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
    }),
    description: z.string({
      required_error: 'description is required',
    }),
  }),
});

export const TaskValidation = {
  createTaskZodSchema,
};
