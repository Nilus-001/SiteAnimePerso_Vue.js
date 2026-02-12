<template>
  <button @click="onClick" class="Bempty">
    <slot />
  </button>
</template>

<script setup>
const emit = defineEmits(["click"]);
const onClick = () => {
  emit("click", true);
};
</script>

<style lang="scss" scoped></style>
