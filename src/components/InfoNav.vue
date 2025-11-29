<script setup>
defineProps({
  planet: {
    type: String,
    default: '',
  },
  activeSection: {
    type: String,
    default: 'overview',
  },
});

const sections = [
  { id: 'overview', label: 'Overview', number: '01' },
  { id: 'structure', label: 'Structure', number: '02' },
  { id: 'geology', label: 'Surface', number: '03' },
];

const emit = defineEmits(['update-section']);
</script>

<template>
  <nav
    v-if="planet"
    aria-labelledby="information-navigation"
    class="info-nav"
  >
    <ul class="info-nav__list">
      <li
        v-for="section in sections"
        :key="section.id"
        class="info-nav__list__item"
        @click="emit('update-section', section.id)"
      >
        <span
          class="info-nav__list__item--decorator"
          :class="[activeSection === section.id ? planet : '']"
        ></span>
        {{ section.label }}
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
  cursor: pointer;
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
