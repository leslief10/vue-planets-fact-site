<script setup>
import { computed, inject, ref } from 'vue';
import { useRoute } from 'vue-router';
import InfoNav from '../components/InfoNav.vue';
import PlanetInfo from '../components/PlanetInfo.vue';

const route = useRoute();
const planets = inject('planetsData');
const activeSection = ref('overview');

const currentPlanet = computed(() => {
  return planets.value.find(
    (planet) => planet.name.toLowerCase() === route.params.planet.toLowerCase(),
  );
});

const handleSectionUpdate = (section) => {
  activeSection.value = section;
};
</script>

<template>
  <InfoNav
    :planet="route.params.planet"
    :active-section="activeSection"
    @update-section="handleSectionUpdate"
  />
  <PlanetInfo :planet-data="currentPlanet" :active-section="activeSection" />
</template>
