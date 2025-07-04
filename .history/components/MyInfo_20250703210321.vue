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

    <div class="flex flex-row gap-5">
      <div class="flex flex-row items-center gap-1">
        <UIcon
          name="ic:baseline-mail-outline"
          class="text-2xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
          dynamic
        />
        <p class="font-sans font-light text-zinc-800/60 dark:text-zinc-50/50">
          contactrizky522@gmail.com
        </p>
      </div>
      <div class="flex flex-row items-center gap-1">
        <UIcon
          name="ic:baseline-mail-outline"
          class="text-2xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
          dynamic
        />
        <p class="font-sans font-light text-zinc-800/60 dark:text-zinc-50/50">
          contactrizky522@gmail.com
        </p>
      </div>
      <div class="flex flex-row items-center gap-1">
        <UIcon
          name="ic:baseline-mail-outline"
          class="text-2xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
          dynamic
        />
        <p class="font-sans font-light text-zinc-800/60 dark:text-zinc-50/50">
          contactrizky522@gmail.com
        </p>
      </div>
      <div class="flex flex-row items-center gap-1">
        <UIcon
          name="ic:baseline-mail-outline"
          class="text-2xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
          dynamic
        />
        <p class="font-sans font-light text-zinc-800/60 dark:text-zinc-50/50">
          contactrizky522@gmail.com
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const app = useAppConfig();
const {
  data: { name, title, bio },
} = app;
</script>
