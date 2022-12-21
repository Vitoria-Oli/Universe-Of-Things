<script setup>
import {nameInput} from "./Scripts/nameInput";
import {universeInput} from "./Scripts/universeInput";
import {infoInput} from "./Scripts/infoInput";
import {addButton} from "./Scripts/buttonFuction";
</script>

<template>
    <div id="form">
        <h1>Add Hero</h1>
        <img src="../assets/Perfil .jpg" alt="" id="photo">
        <input type="text" id="name" placeholder="Name" >
        <input type="text" id="full_name" placeholder="Full Name">
        <input type="text" id="info" placeholder="Information">
        <button id="add" @click="addButton(), nameInput(), universeInput(), infoInput()">Add</button>
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
