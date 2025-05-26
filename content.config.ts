import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    components: defineCollection({
      type: "page",
      source: "components/**/*.md",
    }),
    posts: defineCollection({
      type: "page",
      source: {
        include: "posts/**/*.md",
        exclude: ["**/template.md"],
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
        include: "photos/**/*.md",
        exclude: ["**/template.md"],
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
        camera: z.string(),
        lens: z.string(),
        filter: z.string(),
        telescope: z.string(),
        telescopeMount: z.string(),
        telescopeAperture: z.string(),
        isoSpeed: z.string(),
        focalLength: z.string(),
        focalRatio: z.string(),
        exposureTime: z.string(),
        exposures: z.number(),
        exposuresIntegrated: z.number(),
        calibrationFramesTaken: z.boolean(),
        calibrationFrames: z.string(),
        imageAcquisitionSoftware: z.string(),
        telescopeAutoGuidingSoftware: z.string(),
        calibrationSoftware: z.string(),
        imageProcessingSoftware: z.string(),
      }),
    }),
  },
});
