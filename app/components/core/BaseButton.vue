<template>
  <div>
    <button @click="onCustomClick" v-for="(article, index) in articles" :key="`${index}`">
      {{ article.name }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  text: { type: String, required: true, default: "" },
});

const articles = [
  { name: "pomme" },
  { name: "poire" },
  { name: "citron" },
  { name: "test" },
];

const emit = defineEmits(["customClick"]);
const onCustomClick = () => {
  emit("customClick", true);
};
</script>

<style lang="scss">
// div {
//   @apply flex gap-10 p-10;
// }
// button {
//   @apply dark:bg-blue-950 text-gray-200 p-1;
// }
</style>
