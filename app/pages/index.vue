<template>
  <MainAcceuil :Pdata="data"></MainAcceuil>
</template>

<script setup>
const data = [
  {
    id: 1,
    name: "86",
    img: "/img/86.png",
    genre: ["guerre", "mecha", "genocide"],
    num_episode: 21,
    num_saison: 1,
    heure: "15h30",
  },
  {
    id: 2,
    name: "Made in Abyss",
    img: "/img/mia.png",
    genre: ["gore", "aventure"],
    num_episode: 15,
    num_saison: 3,
    heure: "11h30",
  },
  {
    id: 2,
    name: "Made in Abyss",
    img: "/img/mia.png",
    genre: ["gore", "aventure"],
    num_episode: 15,
    num_saison: 3,
    heure: "11h30",
  },
];
</script>

<style lang="scss"></style>
