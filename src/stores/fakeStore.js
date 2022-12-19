import { defineStore } from 'pinia';

 export const useHeroes = defineStore("heroes", {
    state: () => ({
      heroesList: [{ id: 0, name:"A-bomb", slug: "1-a-bomb" },
    {id:2, name:"Batman", slug:"Batmancillo"},
    {id:3, name:"Superman", slug:"holita"}]
  })
})