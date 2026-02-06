<template>
  <div class="scroll">
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.scroll {
  @apply flex flex-row gap-5 py-2 overflow-x-auto;
  @apply [&::-webkit-scrollbar-track]:bg-gray-600/50 [&::-webkit-scrollbar-thumb]:bg-blue-500 hover:[&::-webkit-scrollbar-thumb]:bg-blue-600 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full;
}
</style>
