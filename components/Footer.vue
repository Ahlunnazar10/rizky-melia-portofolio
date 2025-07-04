<template>
  <UContainer>
    <footer class="flex items-center justify-evenly py-12 relative z-20">
      <p
        class="text-sm text-zinc-700 hover:text-zinc-950 dark:text-zinc-50/80 hover:dark:text-zinc-50"
      >
        Make with ♡ by <strong>Rizky Amalia</strong>
      </p>
    </footer>
  </UContainer>
</template>

<script setup>
const app = useAppConfig();
const {
  data: { email, phone },
} = app;
</script>
