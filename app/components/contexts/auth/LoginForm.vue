<template>
  <form @submit.prevent="onSubmit" class="FLogin" novalidate>
    <InputText label="Pseudo" v-model="usernameValue" :error="usernameError" />
    <InputText label="Mot de Passe" v-model="passwordValue" :error="passwordError" />
    <button type="submit" class="FLogin-button">Se Connecter</button>
  </form>
</template>

<script setup>
import { useForm, useField } from "vee-validate";
const { handleSubmit } = useForm();

const { value: usernameValue, errorMessage: usernameError } = useField(
  "usernameValue",
  "required",
  {
    label: "Pseudo",
  }
);
const { value: passwordValue, errorMessage: passwordError } = useField(
  "passwordValue",
  "required",
  {
    label: "Password",
  }
);

const emits = defineEmits(["onLogin"]);

const onSubmit = handleSubmit((values) => {
  emits("onLogin", values);
});
</script>

<style lang="scss">
.FLogin {
  @apply flex flex-col gap-2 mt-8;
  &-button {
    @apply bg-blue-600 rounded-full mt-4 border-2 border-blue-900;
    @apply hover:border-blue-700 hover:bg-blue-500;
  }
}
</style>
