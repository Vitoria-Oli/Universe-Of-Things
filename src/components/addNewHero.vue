<script setup>
import {nameInput} from "./Scripts/nameInput";
import {universeInput} from "./Scripts/universeInput";
import {infoInput} from "./Scripts/infoInput";
import {addButton} from "./Scripts/buttonFuction";
</script>

<template>
    <div id="form">
        <h1>Add Hero</h1>
        <img src="../assets/Perfil .jpg" alt="" id="foto">
        <input type="text" id="name" placeholder="Name" >
        <input type="text" id="universe" placeholder="Universe">
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
    width: 30%;
    height: 90%;
    background-color: $TertiaryColor;
    float: right ;
    margin: 2% 3% 2% 3%;


    h1{
        text-align: center;
    }

    #foto{
        border-radius: 60%;
        width: 40%;  
    }

    #name{ 
    height: 8%; 
    width: 64%;
    background-color: $SecondaryColor;
    border-radius: 50px;
    border-color:black ;
    justify-content: center;
    padding: 2em 2em 2em 2em;
    
    }

    #universe{
        height: 8%;
        width: 64%;
        background-color: $SecondaryColor;
        border-radius: 50px;
        border-color:black ;
        padding: 2em 2em 2em 2em;
        
    }

    #info{
        height: 25%;
        width: 64%;
        background-color: $SecondaryColor;
        border-radius: 20px;
        border-color:black ;
        padding: 2em 2em 2em 2em;
        
    }

    #add{
        border-radius: 10%;
        background-color: $QuaternaryColor;
        width: 40%;
        height: 10%;
        border: none; 
    }

    ::placeholder{ 
        color:black;
    }
}
</style>
