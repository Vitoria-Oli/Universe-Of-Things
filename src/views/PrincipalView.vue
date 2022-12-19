<script setup>
  import { onBeforeMount, ref } from 'vue';
  import {usePrincipalStore} from '../stores/PrincipalStore';
  import Card from '../components/Card.vue';
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
    <div  class="card-container" v-for="heroe in principalStore.Heroes">
    <Card
      :name="heroe.name"
      :realName="heroe.biography.fullName"
      :alignment="heroe.biography.alignment"
      :powerStats="heroe.powerstats"
      :image="heroe.images.sm"
      
    />
    </div>
  </main>
  <addNewHero/>
</template>
<style lang="scss" scoped>
@use '../assets/scss/main' as *;
#principal-main{
  @include displayFlex(100%, auto, row, space-evenly);
  flex-wrap: wrap;
  background-color: $PrincipalColor;
  overflow: auto;
  .card-container{
    @include displayFlex(20%, auto, column, normal);
    margin: 2%;
  }
}
</style>
