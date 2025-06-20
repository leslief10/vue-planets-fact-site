<script setup>
import { computed, inject } from 'vue';

const innerWidth = inject('innerWidth');
console.log("innerWidth", innerWidth.value);


const props = defineProps({
  planetData: Object,
  activeSection: String,
});

console.log(props.planetData);

const content = computed(() => {
  if (!props.planetData) return null;
  return props.planetData[props.activeSection];
});

const base = import.meta.env.BASE_URL
const svgImage = computed(() => {
  if (props.activeSection === 'geology') {
    return `${base}/svg/${props.planetData.images.overview}`;
  }
  return `${base}/svg/${props.planetData.images[props.activeSection]}`;
});

const svgImageStyle = computed(() => {
  if (innerWidth.value < 768) {
    return props.planetData.images.size.mobile;
  } else if (innerWidth.value >= 768 && innerWidth.value < 1024) {
    return props.planetData.images.size.tablet;
  }

  return props.planetData.images.size.desktop;
});

</script>

<template>
  <section v-if="planetData" class="planet-info">
    <img
      :src="svgImage"
      :alt="`${planetData.name} ${activeSection}`"
      class="planet-info--svg"
      :style="{'width': svgImageStyle, 'height': svgImageStyle}"
    />

    <div>
      <h1>{{ planetData.name }}</h1>
      <p>{{ content.content }}</p>
      <p>Source: <a :href="content.source" target="_blank">Wikipedia</a></p>
    </div>
  </section>
</template>

<style scoped>

.planet-info--svg {
  /* max-width: 16rem;
  max-height: 16rem; */
}
</style>
