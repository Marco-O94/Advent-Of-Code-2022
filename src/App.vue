<template>

  <NavBar :daysData="daysStore.days" />
  <div class="mt-28 container mx-auto">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup lang="ts">
import NavBar from './components/sections/NavBar/NavBar.vue';
import { useDaysStore } from '@/stores/DaysStore';

const daysStore = useDaysStore();
daysStore.getDays();
</script>
