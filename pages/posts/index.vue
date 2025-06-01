<script lang="ts" setup>
const { data: posts } = await useAsyncData("posts", () =>
  queryCollection("posts")
    .where("draft", "=", false)
    .order("date", "DESC")
    .all()
);
definePageMeta({
  layout: "posts",
});

defineOgImageComponent('OgImageHero',{
  title: "spaced.blog",
  description: "Ian's posts about astrophotography.",
  theme: '#ffff00',
  colorMode: 'dark'
})
</script>
<template>
  <UPageColumns>
    <UBlogPost
      v-for="(post, index) in posts"
      :key="index"
      v-bind="post as any"
      :date="post.date"
      :to="post.path"
      :image="post.image ? post.image : ''"
    />
</UPageColumns>
</template>
