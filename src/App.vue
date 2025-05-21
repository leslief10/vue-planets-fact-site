<script setup>
import { provide, ref } from 'vue';
import ButtonComponent from './components/ButtonComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import data from '../src/data/data.json';

const planetsData = ref(data);
provide('planetsData', planetsData);
</script>

<template>
  <HeaderComponent />
  <ButtonComponent planet="mercury" :if-selected="true">
    <span>01</span>
    <span>Component</span>
  </ButtonComponent>
  <ButtonComponent>
    <span>02</span>
    <span>Internal Structure</span>
  </ButtonComponent>
  <ButtonComponent>
    <span>03</span>
    <span>Surface Geology</span>
  </ButtonComponent>
</template>

<style scoped></style>
