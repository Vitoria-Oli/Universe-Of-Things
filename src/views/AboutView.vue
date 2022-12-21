<script setup>
import Carrousel from '../components/Carrousel.vue'
</script>
<template>
  
  <div class="about">
    
  <Carrousel class="carrousel" :view="'about'" />

    
  </div>
</template>

<style lang="scss" scoped>
  @use "../assets/scss/default" as *;

  .about {
    display: flex;
    justify-content: center;
    background-color: $PrincipalColor;
    .carrousel{
      margin-top: 2vh;
      margin-bottom: 2vh;
      width: 60%;
    }
  }

</style>
