import {defineStore} from 'pinia';

export const usePrincipalStore = defineStore ({
    id: 'Heroes',
    state: () => ({
        Heroes: [],
    }),
    actions: {
        async fetchHeroes(){
            await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
            .then (response => response.json())
            .then (data => {
                data.forEach(element => {
                    if(this.Heroes.length < 100){
                        this.Heroes.push(element);
                    }
                })
                /* this.Heroes=data; */
                console.log(this.Heroes);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(onFinally=>{})
        },
        getHeroeId(id){
            return this.Heroes.find(heroe => heroe.id == id);
        },
        addedHeroeToPrincipalStore(heroe){
            
        }
    }    
})