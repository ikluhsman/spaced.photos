<script setup>
defineProps({
  title: { type: String, required: false, default: "Title" },
  description: {
    type: String,
    required: false,
    default: "Descriptive text here",
  },
  bg: {
    type: String,
    required: false,
    default: "linear-gradient(to bottom right, #171717, #131313)",
  },
  icon: { type: String, required: false },
  logo: { type: String, required: false },
  image: { type: String, required: false },
  username: { type: String, required: false },
  socials: { type: Array, required: false },
  
});
</script>

<template>
  <div class="h-full w-full">
    <NuxtImg src="/catalogue/20201206-Veil-Nebula.jpg" class="absolute top-0 right-0 left-0"/>
    <svg
      id="ground"
      class="absolute left-0 -bottom-24 right-0"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 513L28.5 509.8C57 506.7 114 500.3 171.2 484.5C228.3 468.7 285.7 443.3 342.8 435C400 426.7 457 435.3 514.2 447.3C571.3 459.3 628.7 474.7 685.8 490.7C743 506.7 800 523.3 857.2 522.5C914.3 521.7 971.7 503.3 1028.8 491.8C1086 480.3 1143 475.7 1171.5 473.3L1200 471L1200 628L1171.5 628C1143 628 1086 628 1028.8 628C971.7 628 914.3 628 857.2 628C800 628 743 628 685.8 628C628.7 628 571.3 628 514.2 628C457 628 400 628 342.8 628C285.7 628 228.3 628 171.2 628C114 628 57 628 28.5 628L0 628Z"
        fill="#113333"
        strokeLinecap="round"
        strokeLinejoin="miter"
      />
    </svg>
    <UPageSection class="w-full px-16">
        <h1
          class="text-7xl font-bold text-gray-600"
          style="display: block; line-clamp: 2; text-overflow: ellipsis"
        >
          {{ title }}
        </h1>

        <p
          class="text-4xl max-w-3xl text-gray-400 font-bold"
          style="display: block; line-clamp: 3; text-overflow: ellipsis"
        >
          {{ description }}
        </p>
    </UPageSection>
  </div>
</template>
