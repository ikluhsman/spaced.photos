<script lang="ts" setup>
const { data: photos } = await useAsyncData("photos", () => {
  return queryCollection("photos").all();
});
definePageMeta({
  layout: "photos",
});
defineOgImageComponent("OgImageHero", {
  title: "spaced.blog",
  description: "Ian's astrophotography photo gallery.",
  theme: "#ffff00",
  colorMode: "dark",
});
</script>
<template>
  <template v-if="photos?.length == 0"> No photos found. </template>
  <template v-else>
    <UPageColumns>
      <UModal
        v-for="photo in photos"
        close-icon="i-lucide-x"
        :close="{
          color: 'primary',
          variant: 'outline',
          class: 'rounded-full',
        }"
        fullscreen
      >
        <UBlogPost
          :title="photo.title"
          :description="photo.caption"
          :image="photo.image"
          :date="photo.capturedAt"
        />
        <template #body>
          <NuxtImg
            :src="photo.image"
            fit="outside"
            class="justify-self-center self-center"
          />
        </template>
      </UModal>
    </UPageColumns>
  </template>
</template>
