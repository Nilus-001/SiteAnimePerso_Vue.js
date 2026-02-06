<template>
  <label for="label" class="label">{{ label }}</label>
  <input :value="modelValue" @input="onInput" type="text" name="label" class="input" />
  <span class="error"> {{ error }}</span>
</template>

<script setup>
const props = defineProps({
  label: { type: String, required: true, default: "" },
  modelValue: { type: String, required: true, default: "" },
  error: { type: String, required: true, default: "" },
});
const emits = defineEmits(["update:modelValue"]);

const onInput = (e) => {
  emits("update:modelValue", e.target.value);
};
</script>

<style lang="scss">
.error {
  @apply text-[12px] text-red-600;
}
.input {
  @apply outline-none rounded-sm bg-gray-300 text-black p-2;
}
</style>
