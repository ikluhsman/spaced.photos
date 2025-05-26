<script setup lang="ts">
const { data: page } = await useAsyncData("about", () => {
  return queryCollection("components").path("/components/about").first();
});
</script>
<template>
  <UPage>
    <UPageHeader :title="page?.title" :description="page?.description" />
    <UPageBody>
      <ContentRenderer v-if="page" :value="page" />
    </UPageBody>
    <template #right>
      <UContentToc :links="page?.body.toc?.links" />
    </template>
  </UPage>
</template>
