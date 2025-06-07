<script setup lang="ts">
</script>
<template>
  <SiteHeader/>
  <UMain>
    <UPage class="lg:mr-4">
      <UPageBody>
        <slot />
      </UPageBody>
    </UPage>
  </UMain>
  <SiteFooter/>
</template>
