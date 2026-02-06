<template>
  <div class="logoNamed">
    <Applogo :width="width" />
    <span class="title" :style="{ fontSize: scaleText + 'px' }">AnimeHere</span>
  </div>
</template>

<script setup>
const props = defineProps({
  width: { type: Number, required: true, default: 50 },
  scaleText: { type: Number, required: true, default: 10 },
});
</script>

<style lang="scss" scoped>
.logoNamed {
  @apply relative;
}
.title {
  @apply absolute top-6 left-10;
  font-size: var(--scaleText);
}
</style>
