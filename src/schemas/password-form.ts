import { z } from "zod";

export const MIN_PASSWORD_LENGTH = 8;
export const MAX_PASSWORD_LENGTH = 256;

export const passwordFormSchema = z.object({
  length: z.coerce.number().min(MIN_PASSWORD_LENGTH).max(MAX_PASSWORD_LENGTH),
  uppercase: z.boolean(),
  numbers: z.boolean(),
  symbols: z.boolean(),
});

export type PasswordForm = z.infer<typeof passwordFormSchema>;

