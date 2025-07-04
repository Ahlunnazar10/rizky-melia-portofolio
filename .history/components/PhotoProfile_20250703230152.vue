<template>
  <UAvatar :src="photo" size="3xl" alt="my-profile-photo" />
</template>

<script setup>
const app = useAppConfig();
const {
  data: { photo },
} = app;
</script>
