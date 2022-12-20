<script setup>
import { title } from 'process';

 const props = defineProps ({
  title:{
    type: "string",
    default: null,
    

  },
  type:{
    type: "string",
    default: 'like',

  }

 })
</script>

<template>
      <button class="['button', ]">{{ title }}</button>
</template>

<style>
a {
  background: none;
  border: none;
}
</style>