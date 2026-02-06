<template>
  <div id="nav-container">
    <BaseFooterNavItems
      v-for="(data, index) in dataList"
      :key="`footer-nav-${index}`"
      :data="data"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  dataList: { type: Array, required: true },
});
</script>

<style lang="scss" scoped>
#nav-container {
  @apply flex flex-col gap-1;
}
</style>
