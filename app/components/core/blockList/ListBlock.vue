<template>
  <BlockInfo
    v-for="(Idata, index) in Gdata"
    :key="`NumList-${index}`"
    :data="Idata"
    :height="height"
  >
    <template #desc>
      <slot name="desc" :item="Idata" />
    </template>
    <template #param>
      <slot name="param" />
    </template>
  </BlockInfo>
</template>

<script setup>
const props = defineProps({
  Gdata: { type: Array, required: true, default: [] },
  height: { type: Number, default: 275 },
});
</script>

<style lang="scss"></style>
