<template>
  <UAvatar :src="photo" size="3xl" alt="my-profile-photo" height="400" />
</template>

<script setup>
const app = useAppConfig();
const {
  data: { photo },
} = app;
</script>
