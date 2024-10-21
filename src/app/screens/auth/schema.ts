import { z } from "zod";

export const loginSchema = z.object({
  code: z.string().min(10),
  password: z.string().min(3),
});

export type loginSchemaType = z.infer<typeof loginSchema>;
