<script setup>
import { computed, inject, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import InfoNav from '../components/InfoNav.vue';
import PlanetInfo from '../components/PlanetInfo.vue';
import EmptyState from '../components/EmptyState.vue';

const route = useRoute();
const planets = inject('planetsData');
const activeSection = ref('overview');

const currentPlanet = computed(() => {
  return planets.value.find(
    (planet) => planet.name.toLowerCase() === route.params.planet.toLowerCase(),
  );
});

watch(
  () => route.params.planet,
  () => {
    activeSection.value = 'overview';
  },
);

const handleSectionUpdate = (section) => {
  activeSection.value = section;
};
</script>

<template>
  <InfoNav
    :planet="currentPlanet?.name"
    :active-section="activeSection"
    @update-section="handleSectionUpdate"
  />
  <PlanetInfo
    v-if="currentPlanet"
    :planet-data="currentPlanet"
    :active-section="activeSection"
    @update-section="handleSectionUpdate"
  />
  <EmptyState v-else />
</template>
