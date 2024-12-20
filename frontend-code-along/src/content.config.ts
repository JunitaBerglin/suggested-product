// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
// 2. Import loader(s)
import { glob, file } from "astro/loaders";
// 3. Define your collection(s)
const products = defineCollection({
  // Define a loader for this collection
  loader: glob({ pattern: "**/*.json", base: "./src/data" }),
  schema: z.object({
    name: z.string(),
    describtion: z.string(),
    prize: z.string(),
    id: z.string().uuid(),
    imageSrc: z.string().url(),
  }),
});
// 4. Export a single `collections` object to register your collection(s)
export const collections = { products };
