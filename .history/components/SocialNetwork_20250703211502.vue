<template>
  <div class="flex items-center gap-4">
    <NuxtLink
      v-if="email"
      :to="email"
      target="_blank"
      aria-label="Go to social network"
    >
      <UIcon
        name="simple-icons:maildotru"
        class="text-2xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
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
        class="text-2xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
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
        class="text-2xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
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
        class="text-2xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
        dynamic
      />
    </NuxtLink>
  </div>
</template>

<script setup>
const app = useAppConfig();
const {
  data: { phone, email, instagram, x, facebook, github, tiktok, website },
} = app;
</script>
