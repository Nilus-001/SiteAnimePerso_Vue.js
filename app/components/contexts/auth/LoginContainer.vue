<template>
  <section class="login">
    <slot />
  </section>
</template>

<script setup></script>

<style lang="scss">
.login {
  @apply h-[600px] w-[450px] mt-16 p-5 flex flex-col items-center relative;
  @apply bg-gray-950/70 rounded-3xl border-2 border-blue-900/30;
}
</style>
