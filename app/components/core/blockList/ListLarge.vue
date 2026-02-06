<template>
  <div id="planning-list">
    <BlockInfo v-for="(Idata, index) in Gdata" :key="`NumList-${index}`" :data="Idata">
      <template #desc>
        <slot name="desc" :item="Idata" />
      </template>
      <template #param>
        <slot name="param" />
      </template>
    </BlockInfo>
  </div>
</template>

<script></script>

<style></style>
