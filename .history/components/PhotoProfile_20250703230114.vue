<template>
  <UAvatar :src="photo" size="5xl" alt="my-profile-photo" height="200" />
</template>

<script setup>
const app = useAppConfig();
const {
  data: { photo },
} = app;
</script>
