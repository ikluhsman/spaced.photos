<script lang="ts" setup>
const { data: posts } = await useAsyncData("posts", () =>
  queryCollection("posts")
    .where("draft", "=", false)
    .order("date", "DESC")
    .all()
);
defineOgImageComponent("OgImageHero", {
  title: "spaced.blog",
  description: "Ian's posts about astrophotography.",
  theme: "#ffff00",
  colorMode: "dark",
});
</script>
<template>
  <UPage>
    <UPageHeader title="Blog"/>
    <UPageSection>
    <UBlogPosts orientation="vertical">
      <UBlogPost
        v-for="(post, index) in posts"
        :key="index"
        v-bind="post"
        orientation="horizontal"
        :date="post.date"
        :to="post.path"
        :image="post.image ? post.image : ''"
        :ui="{ image: 'md:object-cover object-top aspect-retro' }"
      />
    </UBlogPosts>
  </UPageSection>
  </UPage>
  
</template>
