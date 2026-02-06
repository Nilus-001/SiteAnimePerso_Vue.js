<template>
  <NuxtLink :to="link.href" class="pagelink" ref="ele">
    {{ link.name }}
    <div
      class="pagelink-selector"
      :style="{
        '--Getparentwidth': Math.round(width / 1.5) + 'px',
        '--GetParentwidth50': Math.round(width / 2.5) + 'px',
      }"
    ></div>
  </NuxtLink>
</template>

<script setup>
import { ref } from "vue";
import { useElementSize } from "@vueuse/core";

const props = defineProps({
  link: { type: Object, required: true },
});
const ele = ref(null);
const { width } = useElementSize(ele);
</script>

<style lang="scss">
.pagelink {
  @apply flex flex-col gap-1 items-center;
  &-selector {
    @apply h-[2px] w-[5px];
    @apply bg-gray-500 rounded-full duration-300 ease-out;
    .pagelink:hover & {
      @apply bg-red-500 w-[--Getparentwidth];
    }
    .pagelink.router-link-active & {
      @apply bg-red-500 w-[--GetParentwidth50];
    }
  }
  &.router-link-active {
    @apply font-semibold;
  }
}
</style>
