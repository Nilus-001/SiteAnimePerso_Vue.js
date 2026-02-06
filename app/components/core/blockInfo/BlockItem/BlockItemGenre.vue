<template>
  <div>
    <h3>genre :</h3>
    {{ listGenreText }}
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  list: { type: Array, required: true, default: () => [] },
});

const listGenreText = computed(() => {
  const l = props.list.join(", ");
  return l.length > 20 ? l.slice(0, 20) + "..." : l;
});
</script>

<style lang="scss" scoped>
h3 {
  @apply text-sm;
}
</style>
