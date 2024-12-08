import { z } from "zod";

export const verifySchema = z
  .string()
  .length(8, { message: "Verification code must be atleast 8 characters" });
