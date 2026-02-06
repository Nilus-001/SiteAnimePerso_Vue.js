<template>
  <div class="block-info" :style="{ '--Cheight': height + 'px' }">
    <NuxtLink :to="`${link}${data.id}`">
      <BlockInfoImg :data="data">
        <slot name="param" />
      </BlockInfoImg>
      <div class="bar"></div>
      <slot name="desc" />
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  data: { type: Object, required: true, default: {} },
  link: { type: String, default: `catalog/` },
  height: { type: Number, default: 275 },
});
</script>

<style lang="scss">
.block-info {
  @apply flex flex-col min-w-[164px] h-[--Cheight] border-2 border-slate-900 overflow-hidden hover:scale-[101%] duration-500 ease-in-out;
  @apply bg-slate-800/20 text-gray-200 rounded-xl;
}
.bar {
  @apply h-[2px] bg-gray-500/50 mt-4 mx-2 rounded-full;
}
</style>
