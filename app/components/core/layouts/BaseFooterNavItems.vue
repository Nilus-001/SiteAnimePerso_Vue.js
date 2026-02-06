<template>
  <NuxtLink :to="data.link" class="link">
    {{ data.content }}
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  data: { type: Object, required: true, default: {} },
});
</script>

<style lang="scss" scoped>
.link {
  @apply text-xs;
  @apply hover:underline;
}
</style>
