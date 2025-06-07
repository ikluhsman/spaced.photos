<script lang="ts" setup>
definePageMeta({
  layout: "photos",
});
const route = useRoute();
const { data: photo } = await useAsyncData(route.path, () => {
  return queryCollection("photos")
    .where("stem", "=", route.path.substring(1, route.path.length))
    .first();
});

defineOgImageComponent("OgImagePost", {
  title: photo.value?.title,
  description: photo.value?.caption,
  theme: "#ffff00",
  colorMode: "dark",
  image: photo.value?.image,
  site: "spaced.blog",
  date: photo.value?.capturedAt,
});
</script>
<template>
  <template v-if="photo">
    <UPage>
      <UPageHeader :title="photo.title" :description="photo.caption">
        <template #headline>
          <NuxtTime
            :datetime="new Date(photo.capturedAt)"
            month="long"
            day="numeric"
            year="numeric"
          />
        </template>
      </UPageHeader>
      <UPageBody>
        <UModal
          :close="{
            color: 'primary',
            variant: 'outline',
            class: 'rounded-full fixed',
          }"
          fullscreen
          :ui="{ header: 'landscape:min-h-0 landscape:h-0 landscape:p-0' }"
        >
          <NuxtImg :src="photo.image" class="justify-self-center self-center" />
          <template #body>
            <NuxtImg
              :src="photo.image"
              fit="cover"
              class="justify-self-center self-center landscape:object-fill"
            />
          </template>
        </UModal>
        <ContentRenderer :value="photo" />
      </UPageBody>
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
