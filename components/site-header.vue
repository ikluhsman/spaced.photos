<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";
const items = ref<NavigationMenuItem[]>([
  {
    label: "Blog",
    icon: "i-lucide-file",
    to: "/blog",
  },
  {
    label: "Equipment",
    icon: "i-lucide-telescope",
    to: "/equipment",
    children: [
      {
        label: "ASI 183MC Camera",
        icon: "i-lucide-camera",
        to: "/asi-183mc-camera",
      },
    ],
  },
  {
    label: "Photos",
    icon: "i-lucide-image",
    to: "/photos",
  },
  {
    label: "Resources",
    icon: "i-lucide-file",
    to: "/about",
  },
  {
    label: "About",
    icon: "i-lucide-file",
    to: "/about",
    children: [
      {
        label: "About this Site",
        to: "/about"
      },
      {
        label: "A Note About Celestial Catalogs",
        to: "/a-note-about-celestial-catalogs"
      },
    ]
  },
]);
</script>
<template>
  <UHeader title="spaced.blog">
    <UNavigationMenu :items="items" />
    <template #right>
      <UColorModeButton />
      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/ikluhsman/spaced.blog"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>
    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
