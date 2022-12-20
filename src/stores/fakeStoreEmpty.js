export const useCounterStore = defineStore('counter', () => {
    const favHeroes = ref([])
    const name = ref('Eduardo')
    
    function saveFavHereo() {
      
    }
  
    return { favHeroes, saveFavHereo }
  })