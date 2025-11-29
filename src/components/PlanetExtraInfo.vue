<script setup>
import { computed } from 'vue';

const props = defineProps({
  planetData: {
    type: Object,
    default() {
      return {};
    },
  },
});

const extraInfo = computed(() => {
  return {
    'Rotation Time': props.planetData.rotation,
    'Revolution Time': props.planetData.revolution,
    Radius: props.planetData.radius,
    'Average Temp.': props.planetData.temperature,
  };
});
</script>

<template>
  <aside class="planet-extra-info">
    <ul class="planet-extra-info__list">
      <li
        v-for="(data, type) in extraInfo"
        :key="type"
        class="planet-extra-info__item"
      >
        <span class="planet-extra-info__item--type">{{ type }}</span>
        <span class="planet-extra-info__item--value">{{ data }}</span>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.planet-extra-info {
  width: 100%;
  padding-top: 1.75rem;
}

.planet-extra-info__list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.planet-extra-info__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 1.5rem;
  text-transform: uppercase;
  border: 1px solid var(--white-30);
}

.planet-extra-info__item--type {
  font-size: 0.75rem;
  letter-spacing: 1px;
  margin-top: 0.25rem;
  opacity: 0.7;
}

.planet-extra-info__item--value {
  font-family: var(--secondary-font);
  font-size: 1.25rem;
  letter-spacing: -1px;
}

@media screen and (min-width: 768px) {
  .planet-extra-info {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .planet-extra-info__list {
    flex-direction: row;
  }

  .planet-extra-info__item {
    flex-direction: column;
    align-items: flex-start;
    min-width: 10.25rem;
    height: 5.5rem;
    padding: 1rem 0 1.25rem 1rem;
  }
}

@media screen and (min-width: 1024px) {
  .planet-extra-info {
    grid-area: 5 / 1 / 7 / 7;
  }

  .planet-extra-info__item {
    min-width: 16rem;
    height: 8rem;
    padding: 1.25rem 0 1.75rem 1.5rem;
  }

  .planet-extra-info__item--value {
    font-size: 2.5rem;
    letter-spacing: -1.5px;
  }
}
</style>
