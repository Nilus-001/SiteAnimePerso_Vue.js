<template>
  <div>
    <label v-if="after" for="I-check">{{ label }}</label>
    <input type="checkbox" name="I-check" class="I-check" />
    <label v-if="!after" for="I-check">{{ label }}</label>
  </div>
</template>

<script setup>
const props = defineProps({
  after: { type: Boolean, required: false, default: true },
  label: { type: String, required: true, default: "" },
});
</script>

<style lang="scss" scoped></style>
