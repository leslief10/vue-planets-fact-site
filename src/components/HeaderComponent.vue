<script setup>
import SVGIcon from './SVGIcon.vue';
import { inject, ref, onMounted, computed } from 'vue';

const innerWidth = ref(0);
const visibleNav = ref(false);
const planets = inject('planetsData');

onMounted(() => (innerWidth.value = window.innerWidth));

const displayNav = () => {
  if (innerWidth.value <= 767) {
    visibleNav.value = !visibleNav.value;
  } else {
    visibleNav.value = true;
  }
};

const displayHamburgerBtn = computed(() => {
  return innerWidth.value <= 767;
});
</script>

<template>
  <header class="header">
    <div class="logo-container">
      <span>The Planets</span>
      <button
        v-show="displayHamburgerBtn"
        class="hamburger-button"
        :class="[visibleNav ? 'opacity' : '']"
        @click="displayNav"
      >
        <SVGIcon name="icon-hamburger" />
      </button>
    </div>
    <nav v-show="visibleNav" class="nav">
      <ul class="list">
        <li v-for="(planet, index) in planets" :key="index" class="list-item">
          <span class="list-item--circle" :class="`${planet.name.toLowerCase()}`"></span>
          <a href="#" className="list-item--text" :alt="`Click here for information about ${planet.name}`">
            {{ planet.name }}
            <SVGIcon name="icon-chevron" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  height: 4.25rem;
  position: relative;
  border-bottom: 1px solid var(--white-30);
}

.logo-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-inline: 1.5rem;
  font-family: var(--secondary-font);
  font-size: 1.75rem;
}

.hamburger-button {
  border: none;
}

.opacity {
  opacity: 0.3;
}

.nav {
  position: absolute;
  top: 68px;
  width: 100%;
  height: auto;
  padding: 1.5rem;
  background-color: var(--rich-black);
}

.list-item {
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

.list-item:not(:last-of-type) {
  border-bottom: 1px solid var(--white-30);
}

.list-item--circle {
  width: 1.5rem;
  height: 1.25rem;
  border-radius: 50%;
}

.list-item--text {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-right: 0.5rem;
}
</style>
