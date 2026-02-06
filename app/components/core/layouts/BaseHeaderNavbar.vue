<template>
  <div id="navbar-ele">
    <BaseHeaderNavbarItems
      v-for="(link, index) in links"
      :key="`header-nav-${index}`"
      :link="link"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  links: { type: Array, required: true },
});
</script>

<style lang="scss">
#navbar-ele {
  @apply flex flex-row gap-5 content-center;
}
</style>
