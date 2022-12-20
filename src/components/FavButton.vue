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
 const stylesbutton = {
  like:"button-like",
  edited:"button-edited",
 }
 const getstylebutton = computed (()=>{
  return stylesbutton[props.type];
 })
</script>

<template>
      <button :class="['button', getstylebutton]">{{name}}</button>
    
</template>

<style scoped >
a {
  background: none;
  border: none;
}


</style>