<template>
  <div class="flex items-center gap-5">
    <NuxtLink
      v-if="email"
      :to="email"
      target="_blank"
      aria-label="Go to social network"
    >
      <UIcon
        name="simple-icons:maildotru"
        class="text-3xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
        dynamic
      />
    </NuxtLink>

    <NuxtLink
      v-if="phone"
      :to="phone"
      target="_blank"
      aria-label="Go to social network"
    >
      <UIcon
        name="simple-icons:whatsapp"
        class="text-3xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
        dynamic
      />
    </NuxtLink>

    <NuxtLink
      v-if="instagram"
      :to="instagram"
      target="_blank"
      aria-label="Go to social network"
    >
      <UIcon
        name="i-simple-icons-instagram"
        class="text-3xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
        dynamic
      />
    </NuxtLink>

    <NuxtLink
      v-if="tiktok"
      :to="tiktok"
      target="_blank"
      aria-label="Go to social network"
    >
      <UIcon
        name="i-simple-icons-tiktok"
        class="text-3xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
        dynamic
      />
    </NuxtLink>
  </div>
</template>

<script setup>
const app = useAppConfig();
const {
  data: { phone, email, instagram, tiktok },
} = app;
</script>
