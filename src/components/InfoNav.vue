<script setup>
defineProps({
  planet: String,
  ifSelected: Boolean,
});
</script>

<template>
    <nav aria-labelledby="information-navigation" class="info-nav">
      <ul class="info-nav__list">
        <li class="info-nav__list__item">
          <span class="info-nav__list__item--decorator" :class="[ifSelected ? planet : '']"></span>
          Overview
        </li>
        <li class="info-nav__list__item">
          <span class="info-nav__list__item--decorator" :class="[ifSelected ? planet : '']"></span>
          Structure
        </li>
        <li class="info-nav__list__item">
          <span class="info-nav__list__item--decorator" :class="[ifSelected ? planet : '']"></span>
          Surface
        </li>
      </ul>
    </nav>
</template>

<style scoped>
.info-nav {
  width: 100%;
  height: 3.25rem;
  border-bottom: 1px solid var(--white-30);
}

.info-nav__list {
  display: flex;
  gap: 0 2.75rem;
  justify-content: center;
  padding-top: 1.25rem;
}

.info-nav__list__item {
  position: relative;
}

.info-nav__list__item--decorator {
  position: absolute;
  bottom: -1rem;
  width: 100%;
  height: 0.25rem;
  border-radius: 0;
}

@media screen and (min-width: 768px) {
  .info-nav {
    display: none;
  }
}
</style>