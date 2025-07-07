<script setup>
import { computed, inject } from 'vue';
import SVGIcon from './SVGIcon.vue';

const innerWidth = inject('innerWidth');
// console.log("innerWidth", innerWidth.value);


const props = defineProps({
  planetData: Object,
  activeSection: String,
});

console.log(props.planetData);

const content = computed(() => {
  if (!props.planetData) return null;
  return props.planetData[props.activeSection];
});

const extraInfo = computed(() => { 
  return {
      'Rotation Time': props.planetData.rotation,
      'Revolution Time': props.planetData.revolution,
      'Radius': props.planetData.radius, 
      'Average Temp.': props.planetData.temperature
    }
  ;
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

const pngImage = computed(() => {
  return `${base}/png/${props.planetData.images.geology}`
});

</script>

<template>
  <section v-if="planetData" class="planet-info">
    <figure class="planet-info__img">
      <img
        :src="svgImage"
        :alt="`${planetData.name} ${activeSection}`"
        class="planet-info__img__svg"
        :style="{'width': svgImageStyle, 'height': svgImageStyle}"
      />
      <img v-if="activeSection === 'geology'" 
        :src="pngImage" 
        :alt="`${planetData.name} ${activeSection} picture`" 
        class="planet-info__img__png"
      />
    </figure>
    <div class="planet-info__description">
      <h1 class="planet-info__description__title">{{ planetData.name }}</h1>
      <p class="planet-info__description__text">{{ content.content }}</p>
      <span class="planet-info__description__link">Source: 
        <a :href="content.source" target="_blank">Wikipedia</a>
        <SVGIcon name="icon-source" />
      </span>
    </div>
    <aside class="planet-info__extra-info">
      <ul class="planet-info__extra-info__list">
        <li v-for="data, type in extraInfo" :key="type" class="planet-info__extra-info__item">
          <span class="planet-info__extra-info__item--type">{{ type }}</span>
          <span class="planet-info__extra-info__item--value">{{ data }}</span>
        </li>
      </ul>
    </aside>
  </section>
</template>

<style scoped>
.planet-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
}

.planet-info__img {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 18.75rem;
}

.planet-info__img__png {
  position: absolute;
  /* bottom: 0;
  left: 50%; */
  width: 55px;
}

.planet-info__description {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-top: 1.5rem;
}

.planet-info__description__title {
  font-family: var(--secondary-font);
  font-size: 2.5rem;
  text-transform: uppercase;
}

.planet-info__description__text {
  font-weight: 300;
  line-height: 1.5rem;
  text-align: center;
}

.planet-info__description__link {
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  font-weight: 300;
  opacity: 0.7;
}

.planet-info__description__link a {
  padding-inline: 0.25rem;
  font-weight: 700;
  text-decoration: underline;
  letter-spacing: 0.5px;
}

.planet-info__extra-info {
  width: 100%;
  padding-top: 1.75rem;
}

.planet-info__extra-info__list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.planet-info__extra-info__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 1.5rem;
  text-transform: uppercase;
  border: 1px solid var(--white-30);
}

.planet-info__extra-info__item--type {
  font-size: 0.75rem;
  letter-spacing: 1px;
  margin-top: 0.25rem;
  opacity: 0.7;
}

.planet-info__extra-info__item--value {
  font-family: var(--secondary-font);
  font-size: 1.25rem;
  letter-spacing: -1px;
}
</style>
