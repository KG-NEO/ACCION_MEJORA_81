<template>

    <h2>{{ examen.title }}</h2>
        <select v-model="Opciones">
        
            <option v-for="(option, index) in examen.options"
            :key="index"
            :value="index + 1"
            >

            {{ option }}

            </option>
        
        </select>


        <p>Su respuesta seleccionada es: {{ Opciones }}</p>


</template>

<script lang="ts" setup>  

import { ref } from 'vue';
import type { IQuiz } from '@/interfaces/IQuiz';

const { examen } = defineProps(["examen"]);
const Opciones = ref<number>(examen.aswer);

</script>

<style scoped> 


</style>