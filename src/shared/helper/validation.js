// eslint-disable-next-line import/no-extraneous-dependencies
import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
  password: z.string().min(8, 'Password must be at least 8 characters long.'),
});

export const urlSchema = z.string().url('Please enter a valid URL address.');
