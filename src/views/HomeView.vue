<script setup>
import FavButtonComponent from '../components/FavButtonComponent.vue';
import AboutView from './AboutView.vue';



// let heroes = [
// {
//   "id": 1,
//   "name": "A-Bomb",
//   "slug": "1-a-bomb",
//   },
//   {
//   "id": 2,
//   "name": "Batman",
//   "slug": "1-a-bomb",
//   },
// ]




</script>

<template>
  <main>
    <div id="homeView"><p>Hola Mundo</p></div>
    <div id="copied"></div>
    <FavButtonComponent/>
    <div v-for="item in items">

    </div>
    <AboutView id="aboutView"/>
  </main>
</template>
