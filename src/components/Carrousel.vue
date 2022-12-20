<script setup>
    import { Navigation, Scrollbar, A11y } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    
    import Card from './Card.vue';
    import { onBeforeMount, ref } from 'vue';
  
    import 'swiper/scss';
    import 'swiper/scss/navigation';
    import 'swiper/scss/pagination';
    import 'swiper/scss/scrollbar';

    import { usePrincipalStore } from '../stores/PrincipalStore';
    import { favoriteHeroes } from '../stores/FavouriteStore';

    const principalStore = usePrincipalStore();
    const favoriteStore = favoriteHeroes();
    function addHeroe(heroeId){
      const heroe = principalStore.getHeroeId(heroeId);
      favoriteStore.addHeroeToFavorites(heroe);
    }
    onBeforeMount(()=>{
    getHeroes();
    })
    const getHeroes = async ()=>{
    await principalStore.fetchHeroes()
  }

    const onSwiper = (swiper) => {
        console.log(swiper);
      };
    const onSlideChange = () => {
        console.log('slide change');
    };
    
  </script>
<template>
    <swiper
      :modules="[Navigation, Scrollbar, A11y]"
      :slides-per-view="2"
      :space-between="50"
      navigation
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="heroe in principalStore.Heroes"><Card
        :name="heroe.name"
        :realName="heroe.biography.fullName"
        :alignment="heroe.biography.alignment"
        :powerStats="heroe.powerstats"
        :image="heroe.images.sm"
        :id = "heroe.id"
        @add-heroe="addHeroe(heroe.id)"
        /></swiper-slide>
    </swiper>
</template>

