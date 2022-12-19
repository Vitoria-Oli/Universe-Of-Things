<script setup>
    import {useHeroes} from '../stores/fakeStore.js';
import FavButtonComponent from './FavButtonComponent.vue';
    const store = useHeroes();
</script>
<template>
    <p>Heroes List</p>
    <ul id="heroesList">
        <li v-for ="heroes in store.heroesList">
            {{heroes.name}}
        </li>
    </ul>
    <FavButtonComponent/>
</template>
<style>
#heroesList {
    list-style: circle;
}
</style>