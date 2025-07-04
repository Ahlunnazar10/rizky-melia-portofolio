<template>
  <div class="flex flex-col items-center justify-center">
    <h1
      class="font-sans font-normal text-2xl md:text-3xl text-zinc-900 dark:text-zinc-50/90"
    >
      {{ name }}
    </h1>
    <h2
      class="font-sans font-light text-xl md:text-xl text-zinc-800/90 dark:text-zinc-50/70"
    >
      {{ title }}
    </h2>

    <h2
      class="font-sans font-light text-xl md:text-xl text-zinc-800/90 dark:text-zinc-50/70 mt-5"
    >
      Contact Me
    </h2>
  </div>
</template>

<script setup>
const app = useAppConfig();
const {
  data: { name, title, bio },
} = app;
</script>
