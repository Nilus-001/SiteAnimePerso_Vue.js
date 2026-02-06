<template>
  <NuxtLink :to="link" class="Blink">
    {{ content }}
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  content: { type: String, required: true, default: "" },
  link: { type: String, required: true, default: "/" },
});
</script>

<style lang="scss">
.Blink {
  @apply rounded-full p-2 px-4 border-2;
  @apply bg-blue-950/20 border-blue-950/10;
  @apply hover:border-blue-950 hover:bg-blue-950/40;
}
</style>
