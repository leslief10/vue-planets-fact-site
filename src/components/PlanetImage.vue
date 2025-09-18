<script setup>
import { computed, inject } from 'vue';

const innerWidth = inject('innerWidth');

const props = defineProps({
  planetData: {
    type: Object,
    default() {
      return {};
    },
  },
  activeSection: {
    type: String,
    default: 'overview',
  },
});

const base = import.meta.env.BASE_URL;
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

const pngImage = computed(() => {
  return `${base}/png/${props.planetData.images.geology}`;
});
</script>

<template>
  <figure class="planet-img">
    <img
      :src="svgImage"
      :alt="`${planetData.name} ${activeSection}`"
      :style="{ width: svgImageStyle, height: svgImageStyle }"
    />
    <img
      v-if="activeSection === 'geology'"
      :src="pngImage"
      :alt="`${planetData.name} ${activeSection} picture`"
      class="planet-img__png"
    />
  </figure>
</template>

<style scoped>
.planet-img {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 18.75rem;
}

.planet-img__png {
  position: absolute;
  width: 3.5rem;
}

@media screen and (min-width: 768px) {
  .planet-img__png {
    width: 6.5rem;
  }
}

@media screen and (min-width: 1024px) {
  .planet-img {
    grid-area: 1 / 1 / 5 / 5;
  }
}
</style>
