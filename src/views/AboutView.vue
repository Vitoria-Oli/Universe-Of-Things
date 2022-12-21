<script setup>
import Carrousel from '../components/Carrousel.vue'
</script>
<template>
  
  <div class="about">
    
  <Carrousel class="carrousel" :view="'about'" />

    
  </div>
</template>

<style lang="scss" scoped>

  .about {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    .carrousel{
      height: 100%;
      width: 60%;
    }
  }

</style>
