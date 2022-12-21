<script setup>
// import {nameInput} from "./Scripts/nameInput";
// import {universeInput} from "./Scripts/universeInput";
// import {infoInput} from "./Scripts/infoInput";
// import {addButton} from "./Scripts/buttonFuction";
// addButton(), nameInput(), universeInput(), infoInput()
import { usePrincipalStore } from '../stores/PrincipalStore';
import { ref } from 'vue';

const principalStore = usePrincipalStore();

let name = ref();
let fullname = ref();
let alignment = ref();
let image = '../assets/Perfil.jpg'
function createNewHeroe(){
        const temporalHeroe = {
                id: 731 + Random(1,100),
                name: name.value,
                biography : {
                    fullName: fullname.value,
                    alignment: alignment.value,
                },

                images : {
                    sm: image,
                },

                powerstats: {
                    intelligence: Random(10, 100),
                    strength: Random (10, 100),
                    speed: Random(10, 100),
                    durability: Random(10, 100),
                    power: Random(10, 100),
                    combat: Random(10, 100),

                }
            }
        principalStore.addedHeroeToPrincipalStore(temporalHeroe);
            
}

function Random (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}


</script>

<template>
    <div id="form">
        <h1>Add Hero</h1>
        <img src="../assets/Perfil .jpg" alt="" id="photo">
        <input type="text" id="name" placeholder="Name" v-model="name">
        <input type="text" id="full_name" placeholder="Full Name" v-model="fullname">
        <input type="text" id="info" placeholder="alignment" v-model="alignment">
        <button id="add" @click="createNewHeroe()">Add</button>
    </div>
</template>
<style lang="scss" scoped>

@use "../assets/scss/default" as *;
@use "../assets/scss/add_hero" as *;


#form{
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: space-around;
    width: 25vw;
    height: 35vw;
    background-color: $TertiaryColor;
    float: right ;
    margin: 2% 3% 2% 3%;

    h1{
        text-align: center;
        font-family: Title;
        font-size: 4.8vw;
    }

    #photo{
        border-radius: 100%;
        width: 9vw;  
    }

    #name{ 
        height: 3vw; 
        width: 20vw;
        background-color: $SecondaryColor;
        border-radius: 50px;
        border-color:black ;
        justify-content: center;
        padding: 0em 0em 0em 1em;
    }

    #full_name{
        height: 3vw;
        width: 20vw;
        background-color: $SecondaryColor;
        border-radius: 50px;
        border-color:black ;
        padding: 0em 0em 0em 1em;   
    }

    #info{
        height: 7vw;
        width: 20vw;
        background-color: $SecondaryColor;
        border-radius: 20px;
        border-color:black ;
        padding: 0em 0em 0em 1em;    
    }

    #add{
        border-radius: 10vw;
        background-color: $QuaternaryColor;
        width: 15vw;
        height: 4vw;
        border: none; 
        margin-bottom: 0.5vh;
        font-size: 1.8vw;
        font-family: Title;
    }

    ::placeholder{ 
        color:black;
    }
}

@media (max-width: 500px){
    #form{
        width: 60vw;
        height: 80vw;

        #photo{
            width: 19vw;
            height: 15vh;   
        }

        #add{
            box-sizing: content-box;
            font-size: 3vw;
        }
    }
    
    #name{
        box-sizing: content-box;
    }

    #full_name{
        box-sizing: content-box;
    }

    #info{
        box-sizing: content-box;
    }
}
</style>
