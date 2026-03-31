import * as z from "zod";

export const profileSchema = z.object({
  nickname: z.string().min(2, "Minimum 2 characters required").regex(/^\S+$/, "Spaces are not allowed"),
  bio: z
    .string()
    .min(5, "Tell us a bit more about yourself")
    .refine((val) => val.trim().split(/\s+/).filter(Boolean).length <= 100, {
      message: "Maximum 100 words allowed",
    }),
  website: z
    .string()
    .min(1, "Website is required")
    .refine((val) => {
      const urlToTest = /^https?:\/\//i.test(val) ? val : `https://${val}`;
      try {
        const url = new URL(urlToTest);
        return /\.[a-z]{2,}/i.test(url.hostname);
      } catch {
        return false;
      }
    }, "Invalid URL format or missing domain extension (e.g., .com)"),
});

export type ProfileFormData = z.infer<typeof profileSchema>;
