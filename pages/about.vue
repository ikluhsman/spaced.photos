<script setup lang="ts">
const { data: page } = await useAsyncData("about", () => {
  return queryCollection("pages").path("/pages/about").first();
});
defineOgImageComponent("OgImagePost", {
  title: page.value?.title,
  description: page.value?.description,
  theme: "#ffff00",
  colorMode: "dark",
  site: "spaced.blog",
});
</script>
<template>
  <template v-if="page">
    <UPage>
      <UPageBody>
        <UPageSection>
          <ContentRenderer v-if="page" :value="page" />
        </UPageSection>
      </UPageBody>
      <template #right v-if="page.body.toc">
        <UContentToc :links="page.body.toc.links" />
      </template>
    </UPage>
  </template>
</template>
