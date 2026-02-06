<template>
  <div class="transparent-container">
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss">
.transparent-container {
  @apply rounded-2xl p-3;
  @apply bg-gray-950/40;
}
</style>
