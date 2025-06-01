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
  colorMode: "dark light",
});
</script>
<template>
  <template v-if="photos?.length == 0"> No photos found. </template>
  <template v-else>
    <UPageGrid>
      <ULink as="div" v-for="photo in photos" :to="photo.path">
        <NuxtImg
          :src="photo.image"
          
          class=""
          :to="photo.path"
      /></ULink>
    </UPageGrid>
  </template>
</template>
