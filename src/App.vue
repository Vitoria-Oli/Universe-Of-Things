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
  <div >
    <img id="img_banner" src="./assets/robliefeld on Twitter.jpg" alt="imagen del Banner">

  </div>
  <footer>
    <h2>@Copyright 2022</h2>
  </footer>
  <RouterView />
</template>

<style scoped lang="scss">
@use "../src/assets/scss/default" as *;

@font-face {
  font-family: Title;
  src: url(./assets/Shrikhand/Shrikhand-Regular.ttf);

}


header {
  display: flex;
  flex-direction: column;
  background-color: $TertiaryColor;
  width:95% ;
  height: 20%;
  margin: auto;
  margin-top: 0.9%;
  margin-bottom: 0.9%;
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
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    width: 100%;
    font-size: 150%;
    text-align: center;
  }

  nav a.router-link-exact-active {
    color: $PrincipalColor;
  }

  nav a {
    display: inline-block;
    padding: 0 5rem;
    border-left: 1px solid var(--color-border);
    font-family: Title;
    text-decoration: none;
    color: $QuaternaryColor;
  }

  nav a:first-of-type {
    border: 0;
  }
}

#img_banner{
 width: 100%;
 height: 350px;
}

footer{
  display: flex;
  align-items: center;
  background-color: $TertiaryColor;
  width:100%;
  height: 20%;
  h2{
    font-size: 150%;
    font-family: Title;
    color: $QuaternaryColor;
  }
}
</style>