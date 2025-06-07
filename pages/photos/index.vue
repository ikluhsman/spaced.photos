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
    <UPage>
      <UPageHeader title="Photos" description="Photos and meta." />
      <UPageBody>
        <UPageGrid>
          <ULink v-for="photo in photos" :to="photo.path">
            <NuxtImg :src="photo.image" class="object-cover aspect-retro" />
          </ULink>
        </UPageGrid>
      </UPageBody>
    </UPage>
  </template>
</template>

