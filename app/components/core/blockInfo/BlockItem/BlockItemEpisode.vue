<template>
  <BlockInfoItems
    class="desc-episode"
    :text="` Saison ${data.num_saison} | Episode ${data.num_episode}`"
  />
</template>

<script setup>
const props = defineProps({
  data: { type: Object, default: {} },
});
</script>

<style lang="scss">
.desc-episode {
  @apply text-xs;
}
</style>
