import { z } from "zod";

export const usernameValidation = z
    .string()
    .min(3, "Username must be atleast 3 characters")
    .max(10, "Username must be atleast 10 characters")
    .regex(/^[a-zA-Z0-9_]+ $/, "Username must not contain special characters");

export const signUpschema = z.object({
    username: usernameValidation,
    email: z.string().email({ message: "Invalid email address" }),
    password: z
    .string()
    .min(8, { message: "Password must contain at least 8 characters" }),
});
