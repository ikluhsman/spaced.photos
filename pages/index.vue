<script setup lang="ts">
const links = ref([
  {
    label: "Photo Gallery",
    to: "/photos",
    icon: "i-lucide-image",
    color: "neutral",
    variant: "subtle",
  },
  {
    label: "Read Articles",
    to: "/blog",
    icon: "i-lucide-image",
    color: "neutral",
    variant: "subtle",
  },
]);
const { data: page } = await useAsyncData("home", () => {
  return queryCollection("pages").path("/pages/home").first();
});
const { data: posts } = await useAsyncData("posts", () =>
  queryCollection("posts").order("date", "DESC").limit(9).all()
);

defineOgImageComponent("OgImageHero", {
  title: "spaced.blog",
  description: "Check out Ian's astrophotography work!",
  theme: "#ffff00",
  colorMode: "dark",
});
</script>
<template>
  <UPage>
    <UPageHero title="spaced.blog" :links="links" reverse>
      <template #description>
        <ContentRenderer :value="page" />
      </template>
    </UPageHero>
    <UPageSection>
      <UCarousel
        v-slot="{ item }"
        :items="posts"
        class="w-full max-w-2xl mx-auto"
        :duration="5"
        slidesToScroll="auto"
        arrows
        loop
        dots
        fade
        :ui="{
          container: 'transition-[height]',
          dot: 'w-6 h-1',
          item: 'basis-1/3',
        }"
      >
        <UBlogPost
          class="self-center"
          :date="item.date"
          :title="item.title"
          :image="item.image"
          :description="item.description"
          :to="item.stem"
          :ui="{
            date: 'font-bold uppercase',
          }"
        ></UBlogPost>
      </UCarousel>
    </UPageSection>
  </UPage>
</template>
