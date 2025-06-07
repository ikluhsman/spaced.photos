import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: "page",
      source: {
        include: "*.md",
        exclude: ["post-template*.md"],
      },
      schema: z.object({
        date: z.date(),
        category: z.string(),
        draft: z.boolean(),
        image: z.string()
      })
    }),
    pages: defineCollection({
      type: "page",
      source: {
        include: "pages/*.md",
      },
      schema: z.object({
        date: z.date(),
        category: z.string(),
        draft: z.boolean(),
        image: z.string()
      })
    }),
    photos: defineCollection({
      type: "page",
      source: {
        include: "photos/*.md",
        exclude: ["**/photo-template*.md"],
      },
      schema: z.object({
        caption: z.string(),
        draft: z.boolean(),
        category: z.string(),
        image: z.string(),
        gallery: z.boolean(),
        photographer: z.string(),
        location: z.string(),
        capturedAt: z.string(),
        publishedAt: z.string(),
        
      }),
    }),
  },
});
