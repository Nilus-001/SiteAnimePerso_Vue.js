<template>
  <NuxtLink :to="link">
    <BaseIcon :size="size" :logo="logo" :color="color" />
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  size: { type: Number, required: true, default: 40 },
  logo: { type: String, required: true, default: "material-symbols:add-circle-rounded" },
  link: { type: String, required: true, default: "/" },
  color: { type: String, required: true, default: "" },
});
</script>

<style lang="scss" scoped></style>
