<script setup>
import { provide, onMounted, ref } from 'vue';
import HeaderComponent from './components/HeaderComponent.vue';
import data from '../src/data/data.json';

const innerWidth = ref(0);
const planetsData = ref(data);

onMounted(() => (innerWidth.value = window.innerWidth));
provide('innerWidth', innerWidth);
provide('planetsData', planetsData);
</script>

<template>
  <HeaderComponent />
  <router-view></router-view>
</template>

<style scoped></style>
