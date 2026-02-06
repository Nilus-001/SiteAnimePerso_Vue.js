<template>
  <div class="img-container">
    <NuxtImg :src="data.img" :alt="`img ${data.img}`" class="img"> </NuxtImg>
    <div class="name">
      {{ data.name }}
    </div>
    <div class="adddition">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: { type: Object, required: true, default: {} },
});
</script>

<style lang="scss" scoped>
.img-container {
  @apply w-40 h-40 overflow-hidden align-top text-center text-start relative;
  & .img {
    @apply h-[232px];
  }
}
.name {
  @apply absolute bottom-0 inset-x-0 mx-3 my-2 bg-slate-800/80 text-center rounded-full;
}
.adddition {
  @apply absolute top-0 inset-x-0 m-1 h-10;
  @apply flex flex-row-reverse items-center;
}
</style>
