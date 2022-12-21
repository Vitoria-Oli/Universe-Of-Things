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
                this.removeHeroe(heroe.id);
                return 


            }
            const temporalHeroe = {
                id: heroe.id,
                name: heroe.name,
                biography : {
                    fullName:heroe.biography.fullName,
                    alignment: heroe.biography.alignment,
                },

                images : {
                    sm: heroe.images.sm,
                },

                powerstats: heroe.powerstats
            }
            this.FavHeroes.push(temporalHeroe);
            console.log(this.FavHeroes);
            alert("You added cart to your favorites side ")
        },
       removeHeroe(id){
        console.log(id);
        let searchHeroe =this.FavHeroes.find(item => item.id === id);
        let searchindex = this.FavHeroes.indexOf(searchHeroe);
        this.FavHeroes.splice(searchindex,1);
        console.log(this.FavHeroes);
        alert("You Deleted cart to your favorites side")
       }
    }
})
