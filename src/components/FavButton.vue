<script setup>


import { computed } from 'vue';
 const props = defineProps ({
  name:{
    type: String,
    required: true,
    

  },
  typeButton:{
    type: String,
    default: 'like',
  }

 })
 
</script>

<template>
      <button class="button">{{name}}</button>
 
</template>

<style  lang="scss" scoped >
 
@use '../assets/scss/button' as *;
a {
  background: none;
  border: none;
}

</style>