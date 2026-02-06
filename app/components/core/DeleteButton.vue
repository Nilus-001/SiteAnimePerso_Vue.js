<template>
  <button @click="OnDelete">
    <NuxtImg class="Bdelete" src="/img/icon/delete_icon.png" alt="delete" />
  </button>
</template>

<script setup>
const emits = defineEmits(["delete"]);

const OnDelete = () => {
  emit("delete", true);
};
</script>

<style lang="scss">
.Bdelete {
  @apply h-10;
}
</style>
