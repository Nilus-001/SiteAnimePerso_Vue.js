<template>
  <div class="default-layout">
    <BaseHeader />
    <slot id="main-slot" />
    <BaseFooter />
  </div>
</template>

<script setup></script>

<style lang="scss">
#main-slot {
}
</style>
