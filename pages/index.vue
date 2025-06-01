<script setup lang="ts">
const links = ref([
  {
    label: "Photo Gallery",
    to: "/photos",
    icon: "i-lucide-image",
    color: "neutral",
    variant: "subtle"
  },
  {
    label: "Read Articles",
    to: "/posts",
    icon: "i-lucide-image",
    color: "neutral",
    variant: "subtle",
  },
]);
const items = [
  "/catalogue/20201205-M31-Andromeda.jpg",
  "/catalogue/20201115-M31-Andromeda.jpg",
  "/catalogue/20201206-Veil-Nebula.jpg",
  "/catalogue/20201120-Iris.jpg",
  "/catalogue/20201215-M42-GreatOrionNebula.jpg",
  "/catalogue/20201209-M33-TriangulumPinwheel.jpg",
];
const { data: page } = await useAsyncData("home", () => {
  return queryCollection("components").path("/components/home").first();
});
definePageMeta({
  layout: false,
});
defineOgImageComponent("OgImageHero", {
  title: "spaced.blog",
  description: "Check out Ian's astrophotography work!",
  theme: "#ffff00",
  colorMode: "dark",
});
</script>
<template>
  <UPageHero title="spaced.blog" :links="links as any" reverse>
    <template #description>
      <ContentRenderer :value="page" />
    </template>
    <UCarousel
      v-slot="{ item }"
      :items="items"
      class="w-full max-w-2xl mx-auto"
      :duration="5"
      slidesToScroll="auto"
      autoplay
      loop
      dots
      fade
      :ui="{
        container: 'transition-[height]',
        dot: 'w-6 h-1',
      }"
    >
      <NuxtImg :src="item" class="justify-self-center rounded-md" />
    </UCarousel>
  </UPageHero>
</template>
