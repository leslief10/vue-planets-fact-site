<script setup>
import { provide, ref } from 'vue';
// import ButtonComponent from './components/ButtonComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import data from '../src/data/data.json';

const planetsData = ref(data);
provide('planetsData', planetsData);
</script>

<template>
  <HeaderComponent />
  <router-view></router-view>
  <!-- <ButtonComponent planet="mercury" :if-selected="true">
    <span>01</span>
    <span>Component</span>
  </ButtonComponent> -->
</template>

<style scoped></style>
