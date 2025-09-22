<script setup>
import ButtonComponent from './ButtonComponent.vue';

defineProps({
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
</script>

<template>
  <div class="planet-buttons-container">
    <ButtonComponent
      :planet="planetData.name.toLowerCase()"
      :if-selected="activeSection === 'overview'"
      section="overview"
      @update-section="$emit('update-section', $event)"
    >
      <span>01</span>
      <span>Overview</span>
    </ButtonComponent>
    <ButtonComponent
      :planet="planetData.name.toLowerCase()"
      :if-selected="activeSection === 'structure'"
      section="structure"
      @update-section="$emit('update-section', $event)"
    >
      <span>02</span>
      <span>Internal Structure</span>
    </ButtonComponent>
    <ButtonComponent
      :planet="planetData.name.toLowerCase()"
      :if-selected="activeSection === 'geology'"
      section="geology"
      @update-section="$emit('update-section', $event)"
    >
      <span>03</span>
      <span>Surface Geology</span>
    </ButtonComponent>
  </div>
</template>

<style scoped>
.planet-buttons-container {
  display: none;
}

@media screen and (min-width: 768px) {
  .planet-buttons-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
