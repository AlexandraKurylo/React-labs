import * as z from "zod";

export const profileSchema = z.object({
  nickname: z
    .string()
    .min(2, "Minimum 2 characters required")
    .regex(/^\S+$/, "Spaces are not allowed")
    .transform((val) => val.toLowerCase().trim()),
  bio: z
    .string()
    .min(5, "Tell us a bit more about yourself")
    .refine((val) => val.trim().split(/\s+/).filter(Boolean).length <= 100, {
      message: "Maximum 100 words allowed",
    }),
  website: z
    .string()
    .transform((val) => {
      if (!val) return val;
      return /^https?:\/\//i.test(val) ? val : `https://${val}`;
    })

    /* The second solution */
    // .transform((val) => {
    //   if (!val) return val;
    //   if (!val.startsWith("http://") && !val.startsWith("https://")) {
    //     return `https://${val}`;
    //   }
    //   return val;
    // })

    .pipe(
      z
        .string()
        .url({ message: "Invalid URL format" })
        .regex(/\.[a-z]{2,}(?:\/.*)?$/i, {
          message: "URL must include a valid domain extension (e.g., .com, .ua)",
        }),
    ),
});

export type ProfileFormData = z.infer<typeof profileSchema>;
