import PreData from '../data/PreData.ts';

<template>
    <div>

        <h1> EXAMEN </h1>
<label> Nombre: </label>
<input v-model="nombre"/>

<label > Apellido: </label>
<input v-model="apellido"/>

<div>
    <input type="text">
</div>

    </div>
</template>
<script lang="ts" setup>

import { PreData } from '@/data/PreData';
import { IQuiz } from '@/interfaces/IQuiz';

import { ref } from 'vue';

let nombre = ref("")
let apellido = ref("")

</script>

<style scoped> </style>