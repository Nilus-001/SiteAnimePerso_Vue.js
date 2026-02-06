<template>
  <main id="Lmain">
    <LoginContainer>
      <Applogo :width="130" id="Lmain-logo" />
      <h2 id="Lmain-title">Connexion</h2>
      <LoginForm @onLogin="Login" />
      <NuxtLink to="/user/register" id="Lmain-register"> Register </NuxtLink>
      <ButtonLink id="Lmain-back" content="Go Back" link="/" />
    </LoginContainer>
  </main>
</template>

<script setup>
import { useUserStore } from "~/store/user.store";
import { useRouter } from "vue-router";

definePageMeta({ layout: "none" });
const router = useRouter();

const userStore = useUserStore();
const { loginUser } = userStore;

const Login = (values) => {
  if (loginUser(values.usernameValue, values.passwordValue)) {
    router.push("/");
  }
};
</script>

<style lang="scss">
#Lmain {
  @apply items-center justify-items-center;

  &-title {
    @apply text-center text-2xl mt-4;
  }
  &-logo {
  }
  &-register {
    @apply text-xs text-blue-400 pt-2;
  }
  &-back {
    @apply absolute left-5 bottom-5;
  }
}
</style>
