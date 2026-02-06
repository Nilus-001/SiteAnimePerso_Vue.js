<template>
  <footer id="main-footer">
    <div class="footer-aboutUs">
      <ApplogoName :width="75" :scaleText="18" />
      <div class="footer-aboutUs-links">
        <IconLink :size="35" link="https://github.com/" logo="mdi:github" />
        <IconLink :size="35" link="https://x.com/" logo="ri:twitter-x-fill" />
        <IconLink :size="40" link="https://discord.com/" logo="ic:baseline-discord" />
      </div>
    </div>
    <div class="footer-nav">
      <h2 class="footer-nav-title">Liens</h2>
      <BaseFooterNav :dataList="Listdata" />
    </div>
    <div class="footer-other">
      <div class="footer-other-lang">
        <h2 class="footer-other-lang-title">Languages</h2>
        <LangSwitch />
      </div>
    </div>
  </footer>
</template>

<script setup>
const Listdata = [
  { content: "home", link: "/" },
  { content: "catalogue", link: "/catalog" },
  { content: "planning", link: "/planning" },
  { content: "news", link: "/news" },
  { content: "info", link: "/info" },
  { content: "contact us", link: "/contact" },
];
</script>

<style lang="scss" scoped>
#main-footer {
  @apply grid grid-cols-6 px-40 py-5 gap-3;
  @apply bg-gray-950 h-60;
}
.footer {
  &-aboutUs {
    @apply col-span-2 flex flex-col relative pt-5;
    @apply border-r-2 border-white/30;
    // @apply bg-red-700;
    &-links {
      @apply flex flex-row gap-1 px-5 absolute bottom-7 left-10;
    }
  }
  &-nav {
    @apply px-10 flex flex-col col-start-3  col-span-2;
    @apply border-r-2 border-white/30;
    // @apply bg-lime-500;
    &-title {
      @apply mt-5 mb-2;
    }
  }
  &-other {
    @apply col-span-full col-start-5 px-10 items-start flex flex-row;

    &-lang {
      @apply flex flex-col items-center mt-5 gap-2;
    }
  }
}
</style>
