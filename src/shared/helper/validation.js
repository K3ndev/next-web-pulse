// eslint-disable-next-line import/no-extraneous-dependencies
import { z } from 'zod';

export const urlSchema = z.string().url('Please enter a valid URL address.');
export const emailSchema = z
  .string()
  .email('Please enter a valid email address.');
export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters long.');
