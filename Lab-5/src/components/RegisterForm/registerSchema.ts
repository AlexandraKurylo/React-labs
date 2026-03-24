import * as z from "zod";

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(2, "Ім'я має бути не коротше 2 символів")
      .transform((val) => val.trim().toLowerCase()),

    email: z
      .string()
      .email("Невірний формат email")
      .transform((val) => val.trim().toLowerCase()),

    age: z.number({ message: "Вік має бути числом" }).min(18, "Вам має бути 18 років").max(100, "Вік має бути реалістичним"),

    password: z.string().min(6, "Пароль має містити мінімум 6 символів"),
    confirmPassword: z.string(),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Паролі не співпадають",
        path: ["confirmPassword"],
      });
    }
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
