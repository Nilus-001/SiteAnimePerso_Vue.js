<template>
  <div>
    <label v-if="after" for="I-check">{{ ele }}</label>
    <input
      type="checkbox"
      name="I-check"
      class="I-check"
      v-model="output"
      :id="ele"
      :value="ele"
    />
    <label v-if="!after" for="I-check">{{ ele }}</label>
  </div>
</template>

<script setup>
const props = defineProps({
  after: { type: Boolean, required: false, default: false },
  ele: { type: String, required: true, default: "" },
});
const output = defineModel();
</script>

<style lang="scss" scoped></style>
