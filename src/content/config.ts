import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		featuredImage: z.string().optional(),
		date: z.coerce.date().optional(),
		description: z.string().optional(),
		tags: z.array(z.string())
	}),
});

export const collections = { blog };
