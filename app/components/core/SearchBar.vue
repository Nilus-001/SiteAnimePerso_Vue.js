<template>
  <div class="container">
    <form @submit.prevent="onSubmit" class="Fsearchbar">
      <button type="submit" class="Fsearchbar-button">
        <NuxtImg src="/img/icon/search.png" class="Fsearchbar-img" />
      </button>

      <input
        v-model="value"
        type="text"
        class="Fsearchbar-input"
        placeholder="Rechercher..."
      />
    </form>
    <IconButton
      logo="gridicons:cross"
      color=""
      :size="12"
      @action="delSearch"
      class="icon"
    />
  </div>
</template>

<script setup>
import { useForm, useField } from "vee-validate";
const { handleSubmit } = useForm();
const { value, errorMessage, resetField } = useField("search", "required", {
  label: "search",
});
const emits = defineEmits(["onSearch", "delSearch"]);

const onSubmit = handleSubmit((values) => {
  emits("onSearch", values);
});

const delSearch = () => {
  emits("delSearch", true);
  resetField({
    value: "",
  });
};
</script>

<style lang="scss" scoped>
.container {
  @apply flex flex-row gap-1;
}

.Fsearchbar {
  @apply flex flex-row gap-1 px-2 py-1 rounded-lg border-2 items-center;
  @apply bg-blue-950/20 border-blue-950/10;
  @apply hover:border-blue-950 hover:bg-blue-950/40;
  @apply has-[.Fsearchbar-input:focus]:bg-blue-950/40 has-[.Fsearchbar-input:focus]:border-blue-950;

  &-img {
    @apply h-5;
  }
  &-input {
    @apply outline-none bg-transparent caret-red-600;
  }
}
</style>
