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
]);
</script>
<template>
  <UNavigationMenu :items="items" />
</template>

<style></style>
