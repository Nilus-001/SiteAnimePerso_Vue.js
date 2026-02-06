<template>
  <div class="block-Info">{{ text }}</div>
</template>

<script setup>
const props = defineProps({
  text: { type: String, default: "{none}" },
});
</script>

<style lang="scss" scoped>
.block-Info {
  @apply bg-slate-900 text-center rounded-full border-red-800 border p-1;
}
</style>
