<script lang="ts" setup>
const { data: page } = await useAsyncData("equipment", () => {
  return queryCollection("pages").path("/pages/equipment").first();
})
defineOgImageComponent("OgImagePost", {
  title: page.value?.title,
  description: page.value?.description,
  theme: "#ffff00",
  colorMode: "dark",
  image: page.value?.image,
  site: "spaced.blog",
  date: page.value?.date,
})
</script>
<template>
  <template v-if="page">
    <UPage>
      <UPageHeader :title="page.title" :description="page.description">
        <template #headline>
          <NuxtTime
            :datetime="new Date(page.date)"
            month="long"
            day="numeric"
            year="numeric"
          />
        </template>
      </UPageHeader>
      <UPageBody>
        <UPageSection>
          <ContentRenderer :value="page" :components="{ NuxtImg }" />
        </UPageSection>
      </UPageBody>
      <template #right>
        <UContentToc :links="page?.body?.toc?.links" />
      </template>
    </UPage>
  </template>
  <template v-else>
    <div class="text-center mt-12 empty-page">
      <h1 class="text-2xl">Page Not Found</h1>
      <p>Oops! The content you're looking for doesn't exist.</p>
      <NuxtLink to="/">Go back home</NuxtLink>
    </div>
  </template>
</template>
