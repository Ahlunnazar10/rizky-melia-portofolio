<template>
  <UContainer>
    <footer class="flex items-center justify-evenly py-12 relative z-20">
      <NuxtLink
        :to="`mailto:${email}`"
        class="text-sm text-zinc-700 hover:text-zinc-950 dark:text-zinc-50/80 hover:dark:text-zinc-50"
      >
        {{ email }}
      </NuxtLink>
      <p
        class="text-sm text-zinc-700 hover:text-zinc-950 dark:text-zinc-50/80 hover:dark:text-zinc-50"
      >
        Make with ♡ by <strong>Rizky Amalia</strong>
      </p>
      <NuxtLink
        :to="`tel:${phone}`"
        class="text-sm text-zinc-700 hover:text-zinc-950 dark:text-zinc-50/80 hover:dark:text-zinc-50"
      >
        {{ phone }}
      </NuxtLink>
    </footer>
  </UContainer>
</template>

<script setup>
const app = useAppConfig();
const {
  data: { email, phone },
} = app;
</script>
