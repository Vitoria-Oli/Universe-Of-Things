<script setup>
import { ref } from "vue";
let stary = [0,0,0,0,0];
function checkRank(parameter){

}
</script>
<template>
    <p class="clasification">
      <input
        id="radio1"
        type="radio"
        class="stars"
        value="5"
        v-model="stary"
        @click="stary[0]"
      />
      <label for="radio1">★</label>
      <input
        id="radio2"
        type="radio"
        class="stars"
        value="4"
        v-model="stary"
      />
      <label for="radio2">★</label>
      <input
        id="radio3"
        type="radio"
        class="stars"
        value="3"
        v-model="stary"
      />
      <label for="radio3">★</label>
      <input
        id="radio4"
        type="radio"
        class="stars"
        value="2"
        v-model="stary"
      />
      <label for="radio4">★</label>
      <input
        id="radio5"
        type="radio"
        class="stars"
        value="1"
        v-model="stary"
      />
      <label for="radio5">★</label>
    </p>
  
</template>

<style scoped lang="scss">
.clasification {
  direction: rtl;
  unicode-bidi: bidi-override;

  label {
    color: grey;
  }

  .stars {
    display: none;
  }
  label:hover {
    color: orange;
  }

  label:hover ~ label {
    color: orange;
  }

}

</style>
