<template>
  <form @submit.prevent="onRegister" class="FLogin">
    <InputText label="Email" v-model="emailValue" :error="emailError" />
    <InputText label="Pseudo" v-model="usernameValue" :error="usernameError" />
    <InputText label="Mot de Passe" v-model="passwordValue" :error="passwordError" />
    <InputText
      label="Confirmer le Mot de Passe"
      v-model="VpasswordValue"
      :error="VpasswordError"
    />

    <button type="submit" class="FLogin-button">Créer un compte</button>
  </form>
</template>

<script setup>
import { useForm, useField } from "vee-validate";
import { watch } from "vue";

const { handleSubmit, meta, isSubmitting } = useForm();

const { value: emailValue, errorMessage: emailError } = useField(
  "email",
  "required|email",
  { label: "email" }
);

const { value: usernameValue, errorMessage: usernameError } = useField(
  "username",
  "required",
  { label: "pseudo" }
);

const VerificationPassword = (value) => {
  if (!value) {
    return "password is needed";
  }
  if (value.length < 8) {
    return "password is too short (8 minimum)";
  }
  return true;
};

const { value: passwordValue, errorMessage: passwordError } = useField(
  "password",
  VerificationPassword
);

const VerificationVPassword = (value) => {
  if (!value) {
    return "verification is needed";
  }
  if (value != passwordValue.value) {
    return "password must be the same";
  }
  return true;
};

const {
  value: VpasswordValue,
  errorMessage: VpasswordError,
  validate: validateVpassword,
} = useField("Vpassword", VerificationVPassword);

watch(passwordValue, () => {
  validateVpassword();
});

const emits = defineEmits(["onRegister"]);

const onRegister = handleSubmit((values) => {
  emits("onRegister", values);
});
</script>

<style></style>
