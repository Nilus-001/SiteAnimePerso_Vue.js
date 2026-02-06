<template>
  <main id="Lmain">
    <LoginContainer>
      <h3 id="Lmain-title">Register</h3>
      <Registerform @onRegister="onRegister" />
      <ButtonLink id="Lmain-back" content="J'ai deja un compte" link="/user/login" />
    </LoginContainer>
  </main>
</template>

<script setup>
import { useUserStore } from "~/store/user.store";
import { useRouter } from "vue-router";

definePageMeta({ layout: "none" });
const router = useRouter();

const resourceStore = useUserStore();
const { CreateUser, RegisterUser } = resourceStore;

const onRegister = (values) => {
  const userCreated = CreateUser(values.username, values.email, values.password);
  RegisterUser(userCreated);
  console.log("compte creer !"); //! prov
  router.push("/user/login");
};
</script>

<style lang="scss" scoped>
#Lmain {
  &-back {
    @apply text-xs;
  }
}
</style>
