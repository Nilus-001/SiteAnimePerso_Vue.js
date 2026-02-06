<template>
  <header id="main-header">
    <div class="header-left">
      <NuxtLink to="/" class="header-logo">
        <Applogo :width="50" />
        <h2 class="header-logo-name">AnimeHere</h2>
      </NuxtLink>

      <div class="header-nav">
        <BaseHeaderNavbar :links="links" />
      </div>
    </div>
    <div class="header-user">
      <ButtonLink :content="userBlockText" :link="userBlockLink" />
      <ButtonLink content="?" link="/info" />
      <SearchBar @on-search="Searching" />
    </div>
  </header>
</template>

<script setup>
import { useUserStore } from "~/store/user.store";
import { watch } from "vue";

const links = [
  { name: "catalogue", href: "/catalog" },
  { name: "news", href: "/news" },
  { name: "planning", href: "/planning" },
];

const profileStore = useUserStore();
const { profile } = storeToRefs(profileStore);

const userBlockText = computed(() => {
  return profile.value?.name ? profile.value.name.slice(0, 10) : "Connexion";
});

const userBlockLink = computed(() => {
  return profile.value?.name ? "/user" : "/user/login";
});

const Searching = (values) => {
  console.log(values.search);
};

watch();

const resourceStore = useUserStore();
const { CreateUser, loginUser, RegisterUser } = resourceStore;
const user = CreateUser("mark", "yey@gmail.com", "secret");
// console.log(user);
// loginUser(user);
// console.log(profile.value);
</script>

<style lang="scss">
#main-header {
  @apply grid grid-cols-7 gap-3 px-3 h-20;
  @apply bg-gray-950;

  .header {
    &-left {
      @apply flex flex-row gap-7 col-span-4 col-start-1;
    }

    &-logo {
      @apply flex flex-row items-center content-center pl-2 pr-7;

      &-name {
        @apply text-[25px] hidden  whitespace-nowrap;
        @apply lg:block;
      }
    }
    &-nav {
      @apply content-center text-xl;
    }
    &-user {
      @apply col-span-full col-start-5;
      @apply flex flex-row-reverse px-2 items-center gap-3;
    }
  }
}
</style>
