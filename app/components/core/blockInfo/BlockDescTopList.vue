<template>
  <div class="Block-Desc">
    <BlockItemGenre class="desc-episode" :list="data.genre" />
  </div>
</template>

<script setup>
const props = defineProps({
  data: { type: Object, required: true, default: {} },
});
console.log(props.data.genre);
</script>

<style lang="scss">
.Block-Desc {
  @apply flex flex-col gap-2 p-4;
}
</style>
