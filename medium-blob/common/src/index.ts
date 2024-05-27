import z from "zod";
export const siginupInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

export type SiginupInput = z.infer<typeof siginupInput>;
export const sigininInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type SigininInput = z.infer<typeof sigininInput>;

export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});
export type CreateBlogInput = z.infer<typeof createBlogInput>;
export const updateBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
