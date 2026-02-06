-- Active: 1743432004743@@127.0.0.1@3306
<template>
  <main id="Main-acceuil">
    <!-- <section class="section-info">info</section>
    <section class="section-news">news</section> -->
    <PlanningList :Gdata="Pdata" />
    <WatchList :Gdata="Pdata" />
    <TopList :Gdata="Pdata" />
  </main>
</template>

<script setup>
const props = defineProps({
  Pdata: { type: Object, required: true, default: {} },
});
</script>

<style lang="scss">
#Main-acceuil {
  @apply px-[10%];
}
.section {
  &-info {
    @apply bg-gray-100;
  }
  &-news {
    @apply bg-gray-100;
  }
}
</style>
