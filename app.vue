<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'spaced.blog',
  ogTitle: 'spaced.blog',
  description: 'A website showcasing my astro photography hobby.',
  ogDescription: 'A website showcasing my astro photography hobby.',
  ogImage: '',
  twitterCard: 'summary_large_image',
})
</script>