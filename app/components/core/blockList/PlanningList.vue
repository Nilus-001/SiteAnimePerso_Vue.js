<template>
  <div id="planning-section">
    <BaseTitle text="Planning">[prev] day [next] </BaseTitle>
    <AcceuilListContainer>
      <ListBlock :Gdata="Gdata">
        <template #desc="{ item }">
          <BlockInfoDescPlanning :data="item" />
        </template>
      </ListBlock>
    </AcceuilListContainer>
  </div>
</template>

<script setup>
const props = defineProps({
  Gdata: { type: Array, required: true, default: [] },
});
</script>

<style lang="scss">
#planning-section {
  @apply flex flex-col gap-3 py-3;
}
</style>
