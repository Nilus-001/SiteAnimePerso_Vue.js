<template>
  <div class="Block-Desc">
    <BlockInfoItems :text="`${data.nbSaison} Saison`" />
    <BlockItemGenre class="desc-episode" :list="data.genre" />
  </div>
</template>

<script setup>
const props = defineProps({
  data: { type: String, required: true, default: {} },
});
</script>

<style lang="scss" scoped></style>
