<template>
  <Icon :name="logo" :size="size" :style="{ color: color }" />
</template>

<script setup>
const props = defineProps({
  size: { type: Number, required: true, default: 40 },
  logo: { type: String, required: true, default: "material-symbols:add-circle-rounded" },
  color: { type: String, required: true, default: "" },
});
</script>

<style lang="scss" scoped></style>
