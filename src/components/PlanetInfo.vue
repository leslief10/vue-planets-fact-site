<script setup>
import { computed } from 'vue';
// import '../assets/png/geology-earth.png'

const props = defineProps({
  planetData: Object,
  activeSection: String,
});

console.log(props.planetData);

const content = computed(() => {
  if (!props.planetData) return null;

  return props.planetData[props.activeSection];
});
</script>

<template>
  <section v-if="planetData">
    <img
      :src="`../assets/${activeSection === 'geology' ? 'png' : 'svg'}/${planetData.images[activeSection]}`"
      :alt="`${planetData.name} ${activeSection}`"
    />
    <div>
      <h1>{{ planetData.name }}</h1>
      <p>{{ content.content }}</p>
    </div>
  </section>
</template>

<style scoped></style>
