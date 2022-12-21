<script setup>
import FavButton from './FavButton.vue';
import stars from './stars.vue';
    const props = defineProps({
        name: {
            type: String,
            required: true,
        },
        realName: {
            type: String,
            default: null,
        },
        alignment: {
            type: String,
            default: null,
        },
        powerStats: {
            type: Object,
            default: null,
        },
        image: {
            type: String,
            default: null,
        },
        id: {
            type: Number,
            default: null,
        },
    });
    function changeFirstLetterUpperCase(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    function verifyContent(parameter){
        return (parameter == '') ? 'Unknown': parameter;
    }
    delete props.powerStats.combat;
    delete props.powerStats.durability;
    const emits = defineEmits(["addHeroe"]);

    const emitHeroe = ()=>{
        emits("addHeroe", props.id);
    } 
</script>
<template>
    <div class="card">
        <img class="image-cards" :src="image" :alt="`Foto de ${name}`">
        <div class="heroe-name">
            <p>{{name}}</p>
        </div>
        <div class="heroe-info">
            <p><span>Real Name:</span> {{verifyContent(realName)}}</p>
            <p><span>Alignment:</span> {{ changeFirstLetterUpperCase(alignment) }}</p>
            <div class="heroe-stats">
                <div v-for="item, key in powerStats"><span>{{ changeFirstLetterUpperCase(key) }}:</span> {{item}}</div>
            </div>
        </div>
        <div class="button-section">
            <FavButton :name="''" @click="emitHeroe" />
           <stars></stars>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/scss/main' as *;

.card {
    border: $TertiaryColor solid;
    width: 100%;
    height: 100%;
    border-radius: 1.5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: $QuinaryColor;
    font-size: x-large;
    font-weight: bold;

    .image-cards {
        width: 80%;
        height: 50%;
        margin-top: 5%;
    }

    .heroe-name {
        width: 81%;
        display: flex;
        align-items: flex-start;
        margin-top: 3%;
           
        
    }

    .heroe-info {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: left;
        color: $PrincipalColor;
        font-weight: bold;
        font-size: small;
        border-radius: 5%;
        margin-top: 2%;
        .heroe-stats {
            width: 90%;
        }
        span{
            font-weight: 900;
        }
    }
    .button-section{
        @include displayFlex(80%, 5% , row, space-evenly , center);

    }

}


</style>