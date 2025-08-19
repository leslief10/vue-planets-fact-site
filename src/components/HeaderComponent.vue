<script setup>
import SVGIcon from './SVGIcon.vue';
import MainNav from './MainNav.vue';
import { ref } from 'vue';

const visibleNav = ref(false);

const changeNavVisibility = () => {
  visibleNav.value = !visibleNav.value;
};

const handleCloseNav = () => {
  visibleNav.value = false;
};
</script>

<template>
  <header class="header">
    <div class="header__logo">
      <router-link :to="`/mercury`" class="header__title" :title="`Click here to go back to Mercury`">
        The Planets
      </router-link>
      <button class="header__logo__button" :class="[visibleNav ? 'opacity' : '']" @click="changeNavVisibility">
        <SVGIcon name="icon-hamburger" />
      </button>
    </div>
    <MainNav :visible-nav="visibleNav" @close-nav="handleCloseNav" />
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  height: 4.25rem;
  position: relative;
  border-bottom: 1px solid var(--white-30);
}

.header__logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-inline: 1.5rem;
  font-family: var(--secondary-font);
  font-size: 1.75rem;
}

.header__logo__button {
  border: none;
}

.opacity {
  opacity: 0.3;
}

@media screen and (min-width: 768px) {
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem 0;
    height: auto;
  }

  .header__logo {
    padding-top: 2rem;
  }

  .header__logo__button {
    display: none;
  }
}

@media screen and (min-width: 1024px) {
  .header {
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
  }

  .header__logo {
    padding: 1.5rem 0 1.75rem 2rem;
  }

  .header__title {
    width: max-content;
  }
}
</style>
