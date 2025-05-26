<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";
const items = ref<NavigationMenuItem[]>([
  {
    label: "Photos",
    icon: "i-lucide-images",
    to: "/photos",
  },
  {
    label: "Blog",
    icon: "i-lucide-file",
    to: "/posts",
  },
  // {
  //   label: "Catalogue",
  //   icon: "i-lucide-file-stack",
  //   to: "/photos",
  //   children: [
  //     {
  //       label: "Galaxies",
  //       icon: "i-lucide-aperture",
  //       to: "/gallery?category=galaxies",
  //     },
  //     {
  //       label: "Nebulae",
  //       icon: "i-lucide-cloud",
  //       to: "/gallery?category=nebulae",
  //     },
  //     {
  //       label: "Planetary",
  //       icon: "i-lucide-globe",
  //       to: "/gallery?category=planetary",
  //     },
  //     {
  //       label: "Star Clusters",
  //       icon: "i-lucide-stars",
  //       to: "/gallery?category=star-clusters",
  //     },
  //   ],
  // },
]);
</script>
<template>
  <UNavigationMenu :items="items" />
</template>

<style></style>
