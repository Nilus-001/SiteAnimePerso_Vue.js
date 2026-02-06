<template>
  <button @click="action">
    <BaseIcon :size="size" :logo="logo" :color="color" />
  </button>
</template>

<script setup>
const props = defineProps({
  size: { type: Number, required: true, default: 40 },
  logo: { type: String, required: true, default: "material-symbols:add-circle-rounded" },
  color: { type: String, required: true, default: "" },
});
const emits = defineEmits(["action"]);
const action = () => {
  emits("action", true);
};
</script>

<style></style>
