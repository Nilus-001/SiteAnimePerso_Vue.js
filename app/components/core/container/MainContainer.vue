<template>
  <div class="main-container">
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss">
.main-container {
  @apply rounded-2xl p-3;
  @apply bg-gray-950;
}
</style>
