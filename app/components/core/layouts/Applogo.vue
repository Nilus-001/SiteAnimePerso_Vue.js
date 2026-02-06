<template>
  <NuxtImg src="/img/logo.png" alt="logo" :width="width" />
</template>

<script setup>
const props = defineProps({
  width: { type: Number, default: 100 },
});
</script>

<style></style>
