import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolio = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    image: z.string(), // O z.image() para optimización local
    videoUrl: z.string().url().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = { portfolio };