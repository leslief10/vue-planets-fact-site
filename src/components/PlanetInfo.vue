<script setup>
import { computed, inject } from 'vue';
import SVGIcon from './SVGIcon.vue';
import PlanetImage from './PlanetImage.vue';
import ButtonsContainer from './ButtonsContainer.vue';

const visibleNav = inject('visibleNav');

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

defineEmits(['update-section']);

const content = computed(() => {
  return props.planetData[props.activeSection];
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
  <section
    class="planet-info"
    :class="[visibleNav ? 'planet-info--invisible' : '']"
  >
    <PlanetImage
      :planet-data="planetData"
      :active-section="activeSection"
    />
    <div class="planet-info__organizer">
      <div class="planet-info__description">
        <h1 class="planet-info__description__title">{{ planetData.name }}</h1>
        <p class="planet-info__description__text">{{ content.content }}</p>
        <span class="planet-info__description__link"
          >Source:
          <a
            :href="content.source"
            target="_blank"
            >Wikipedia</a
          >
          <SVGIcon name="icon-source" />
        </span>
      </div>
      <ButtonsContainer
        :planet-data="planetData"
        :active-section="activeSection"
        @update-section="$emit('update-section', $event)"
      />
    </div>
    <aside class="planet-info__extra-info">
      <ul class="planet-info__extra-info__list">
        <li
          v-for="(data, type) in extraInfo"
          :key="type"
          class="planet-info__extra-info__item"
        >
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

.planet-info--invisible {
  display: none;
}

.planet-info__organizer {
  padding-top: 1.5rem;
}

.planet-info__description {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
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

@media screen and (min-width: 768px) {
  .planet-info__extra-info {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .planet-info__extra-info__list {
    flex-direction: row;
  }

  .planet-info__extra-info__item {
    flex-direction: column;
    align-items: flex-start;
    min-width: 10.25rem;
    height: 5.5rem;
    padding: 1rem 0 1.25rem 1rem;
  }

  .planet-info__organizer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .planet-info__description {
    max-width: 21.25rem;
    align-items: flex-start;
  }

  .planet-info__description__text {
    text-align: left;
  }
}

@media screen and (min-width: 1024px) {
  .planet-info {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    padding: 4.5rem 0 3.5rem;
  }

  .planet-info__description {
    gap: 1.5rem;
  }

  .planet-info__description__title {
    font-size: 5rem;
  }

  .planet-info__organizer {
    grid-area: 1 / 5 / 5 / 7;
    flex-direction: column;
    gap: 2.5rem;
    padding-top: 0;
  }

  .planet-info__extra-info {
    grid-area: 5 / 1 / 7 / 7;
  }

  .planet-info__extra-info__item {
    min-width: 16rem;
    height: 8rem;
    padding: 1.25rem 0 1.75rem 1.5rem;
  }

  .planet-info__extra-info__item--value {
    font-size: 2.5rem;
    letter-spacing: -1.5px;
  }
}
</style>
