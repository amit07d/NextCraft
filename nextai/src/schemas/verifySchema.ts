import {z} from 'zod'

export const verifySchema = z.object({
  code: z
    .string()
    .length(8, { message: "Verification code must be at least 8 characters" }),
});