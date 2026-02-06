<template>
  <div class="title-grid">
    <div class="title">
      <h2 class="text">{{ text }}</h2>
    </div>
    <div class="right-interaction">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  text: { type: String, default: "" },
});
</script>

<style lang="scss" scoped>
.title-grid {
  @apply grid grid-cols-7 px-5 text-xl bg-gray-950 text-gray-300 py-2 gap-3 font-semibold rounded-full w-auto;
}
.title {
  @apply flex flex-row gap-2 col-span-3 col-start-1;
}

.right-interaction {
  @apply col-span-4 col-start-4 flex flex-row-reverse;
}
</style>
