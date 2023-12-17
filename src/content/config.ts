import {defineCollection} from "astro:content";
import {z} from "astro/zod";

export const collections={
  blog: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      date: z.date(),
      tags: z.array(z.string()),
      image: z.string().optional()
    })
  })
}
