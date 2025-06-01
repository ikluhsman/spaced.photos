<template>
  <UHeader title="spaced.photos">
    <nav-menu />
    <template #right>
      <UTooltip text="About this Site" :kbds="['meta', 'A']">
        <UButton
          color="neutral"
          variant="ghost"
          to="/about"
          icon="ix-about"
          aria-label="About"
        />
      </UTooltip>
      <UColorModeButton />
      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/ikluhsman/spaced.photos"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>
  </UHeader>
  <UMain>
    <UPage>
      <slot />
    </UPage>
  </UMain>
  <UFooter>
    <template #bottom>
      <p class="text-muted text-sm text-center">
        All Materials Copyright © {{ new Date().getFullYear() }} Ian Kluhsman
      </p>
    </template>
  </UFooter>
</template>
