import * as z from "zod";

export const registerSchema = z
  .object({
    username: z.string().min(2, "Username must be at least 2 characters long").regex(/^\S+$/, "Spaces are not allowed"),
    email: z.string().email("Invalid email format"),
    age: z
      .number({ message: "Age must be a number" })
      .min(18, "You must be at least 18 years old")
      .max(100, "Age must be realistic"),

    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string(),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
