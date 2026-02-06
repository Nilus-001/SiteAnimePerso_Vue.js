<template>
  <div class="Block-Desc">
    <BlockItemEpisode class="desc-episode" :data="data" />
  </div>
</template>

<script setup>
const props = defineProps({
  data: { type: Object, default: {} },
});
</script>

<style lang="scss">
.Block-Desc {
  @apply flex flex-col gap-2 p-4;
}
</style>
