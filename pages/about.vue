<script setup lang="ts">
const { data: page } = await useAsyncData("about", () => {
  return queryCollection("components").path("/components/about").first();
});
defineOgImageComponent('OgImagePost',{
  title: page.value?.title,
  description: page.value?.description,
  theme: '#ffff00',
  colorMode: 'dark',
  site: "spaced.blog",
})
</script>
<template>
  <UPage>
    <UPageHeader :title="page?.title" :description="page?.description"/>
    <UMain>

    
    <UPageBody>
      <ContentRenderer v-if="page" :value="page" />
    </UPageBody>
    </UMain>
    <template #right>
      <UContentToc :links="page?.body.toc?.links" />
    </template>
  </UPage>
</template>
