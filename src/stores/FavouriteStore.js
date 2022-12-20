import {defineStore} from 'pinia';

export const favoriteHeroes= defineStore({
    id: 'favorites',
    state: () => ({
        FavHeroes:[],
    }),
    actions: {
        addHeroeToFavorites(heroe){
            let addHeroe = this.FavHeroes.find(item => item.id === heroe.id);
            if(addHeroe){
                console.log('repetido');
            }
            const temporalHeroe = {
                id: heroe.id,
                name: heroe.name,
                realname: heroe.biography.fullName,
                alignment: heroe.biography.alignment,
                image: heroe.images.sm,
                powerstats: heroe.powerstats
            }
            this.FavHeroes.push(temporalHeroe);
            console.log(this.FavHeroes);
        }
    }
})
