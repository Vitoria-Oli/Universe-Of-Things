<script setup>
  import { onBeforeMount, ref } from 'vue';
  import {usePrincipalStore} from '../stores/PrincipalStore';
  import Carrousel from '../components/Carrousel.vue';
  import addNewHero from '../components/addNewHero.vue';
  const principalStore = usePrincipalStore();
  onBeforeMount(()=>{
    getHeroes();
  })
  const loading = ref(true);
  const getHeroes = async ()=>{
    await principalStore.fetchHeroes()
  }
</script>

<template>
  <main id="principal-main">
    
    <Carrousel class="card-container"/>
    <addNewHero/>
  </main>
  
</template>
<style lang="scss" scoped>
@use '../assets/scss/main' as *;
#principal-main{
  @include displayFlex(100%, 80vh, row, space-evenly,center);
  flex-wrap: wrap;
  background-color: $PrincipalColor;
  
  .card-container{
    @include displayFlex(60%, 90%, column, normal,normal);
    margin: 2%;
  }
}
</style>
