<script lang="ts" setup>
const { data: photos } = await useAsyncData("photos", () => {
  return queryCollection("photos").all();
});
definePageMeta({
  layout: "photos",
});
</script>
<template>
  <template v-if="photos?.length == 0"> No photos found. </template>
  <template v-else>
    <UPageColumns>
      <UModal v-for="photo in photos" close-icon="i-lucide-x" :close="{
      color: 'primary',
      variant: 'outline',
      class: 'rounded-full'
    }" fullscreen>
      <UBlogPost :title="photo.title" :description="photo.caption" :image="photo.image" :date="photo.capturedAt">
        <!-- <NuxtImg :src="photo.image" :to="photo.path" /> -->
      </UBlogPost>
      <template #body>
        <NuxtImg :src="photo.image" fit="outside" class="justify-self-center self-center "/>
      </template>
      </UModal>
    </UPageColumns>
  </template>
</template>
