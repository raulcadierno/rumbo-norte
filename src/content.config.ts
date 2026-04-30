import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolio = defineCollection({
	loader: glob({
		pattern: '**/*.{md,mdx}',
		base: './src/content/portfolio'
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		image: z.string(),
		videoUrl: z.string().url().optional(),
		tags: z.array(z.string())
	})
});

const viajes = defineCollection({
	loader: glob({
		pattern: '**/*.{md,mdx}',
		base: './src/content/viajes'
	}),
	schema: z.object({
		routeId: z.string(),
		title: z.string(),
		subtitle: z.string(),
		description: z.string(),
		image: z.string(),
		duration: z.string(),
		groupSize: z.string(),
		price: z.string(),
		primaryColor: z.string().optional(),
		secondaryColor: z.string().optional(),
		ctaButtonColor: z.string().optional(),
		linkHoverColor: z.string().optional(),
		textColor: z.string().optional(),
		backgroundColor: z.string().optional()
	})
});

export const collections = { portfolio, viajes };