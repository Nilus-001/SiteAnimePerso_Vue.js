<template>
  <div class="planning-list">
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss">
.planning-list {
  @apply py-4 px-8;
  @apply bg-gray-950 rounded-[30px] border-4 border-l-2 border-r-2 border-slate-900 border-l-red-700 border-r-red-700;
}
</style>
