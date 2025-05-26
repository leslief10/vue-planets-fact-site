<script setup>
import SVGIcon from './SVGIcon.vue';
import { inject, computed } from 'vue';

const planets = inject('planetsData');

defineProps({
  visibleNav: Boolean,
  innerWidth: Number
})

const displayNav = computed(() => {
  return innerWidth >= 768;
})
</script>

<template>
  <nav v-show="visibleNav || displayNav" aria-labelledby="primary-navigation" class="nav">
    <ul class="nav__list">
      <li v-for="planet in planets" :key="planet.id" class="nav__list__item">
        <span class="nav__list__item--decorator" :class="`${planet.name.toLowerCase()}`"></span>
        <a href="#" className="nav__list__item--text" :alt="`Click here for information about ${planet.name}`">
          {{ planet.name }}
          <SVGIcon name="icon-chevron" class="nav__list__item--icon" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  position: absolute;
  top: 68px;
  width: 100%;
  height: auto;
  padding: 1.5rem;
  background-color: var(--rich-black);
}

.nav__list__item {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  padding-block: 1.25rem;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
}

.nav__list__item:not(:last-of-type) {
  border-bottom: 1px solid var(--white-30);
}

.nav__list__item--decorator {
  width: 1.5rem;
  height: 1.25rem;
  border-radius: 50%;
}

.nav__list__item--text {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-right: 0.5rem;
}

@media (hover: hover) {
  .nav__list__item:hover {
    .nav__list__item--decorator {
      display: block;
    }
  }
}

@media screen and (min-width: 768px) {
  .nav {
    position: relative;
    top: 0;
    padding: 0 0 1.75rem;
    background-color: transparent;
  }

  .nav__list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 2rem;
  }

  .nav__list__item {
    position: relative;
    padding-block: 0;
    font-size: 0.75rem;
    letter-spacing: 1px;
  }

  .nav__list__item:not(:last-of-type) {
    border-bottom: none;
  }

  .nav__list__item--decorator {
    display: none;
    position: absolute;
    bottom: -1.75rem;
    width: 100%;
    height: 0.25rem;
    border-radius: 0;
  }

  .nav__list__item--icon {
    display: none;
  }

  .nav__list__item--text {
    padding-right: 0;
  }
}

@media screen and (min-width: 1024px) {
  .nav {
    width: auto;
    padding: 0 2rem 1.75rem 0;
  }

  .nav__list__item--decorator {
    top: -2.25rem;
    bottom: 0;
  }
}
</style>