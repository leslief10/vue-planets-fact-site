<script setup>
defineProps({
  planet: {
    type: String,
    default: 'Earth',
  },
  ifSelected: Boolean,
  section: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update-section']);
</script>

<template>
  <button
    class="button"
    :class="[ifSelected ? planet : '']"
    @click="emit('update-section', section)"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  padding: 0.75rem 1.75rem;
  width: 17.5rem;
  height: 2.5rem;
  font-family: var(--main-font);
  font-size: 0.5rem;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: calc(0.25rem / 2);
  text-align: left;
  text-transform: uppercase;
  border: 1px solid var(--white-30);
  color: #ffffff;
}

@media (hover: hover) {
  .button:hover {
    cursor: pointer;
    background-color: var(--light-silver-30);
  }
}

@media screen and (min-width: 1024px) {
  .button {
    width: 21.875rem;
    font-size: 0.75rem;
  }
}
</style>
