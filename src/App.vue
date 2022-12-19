<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>WE MASTER YOUR EXPERIENCE</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">Favorites</RouterLink>
    </nav>
  </header>
  
  <RouterView />
</template>

<style scoped lang="scss">
@use "../src/assets/scss/default" as *;

@font-face {
  font-family: Title;
  src: url(./assets/Shrikhand/Shrikhand-Regular.ttf);

}

header {

  background-color: $TertiaryColor;
  width:95% ;
  height: 20%;
  margin: auto;
  margin-top: 0.5%;
  border-top-left-radius: 40px 40px;
  border-bottom-right-radius: 40px 40px;
  border-top-right-radius: 40px 40px;
  border-bottom-left-radius: 40px 40px;
  justify-content: center;

  h1{
    color: $PrincipalColor;
    font-family: Title;
    font-size: 300%;
  }
  nav {
    display: flex;
    justify-content: space-between;

  }
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
