<template>
  <div class="listgrid">
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.listgrid {
  @apply flex flex-row gap-6 flex-wrap px-12 py-10;
}
</style>
