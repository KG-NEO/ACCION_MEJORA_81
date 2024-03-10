import PreData from '../data/PreData.ts';

<template>

<div class="titulo">
            <h1> EXAMEN </h1>
        </div>

    <div class="datos">      
<label> Nombre: </label>
<input v-model="nombre"/>

<label > Apellido: </label>
<input v-model="apellido"/>
    </div>
<hr/>

<div class="pre">
    <ExamenItem v-for="examen in predata" :key="examen.id" :examen="examen" />
</div>

</template>
<script lang="ts" setup>

import PreData from '../../data/PreData'
import ExamenItem from './ExamenItem.vue';
import { ref } from 'vue';

let nombre = ref("")
let apellido = ref("")

const predata = ref(PreData);

</script>

<style scoped> 
.titulo{
    text-align: center;
}
.datos{
    text-align: center;
}
.pre{
    width: 80rem;
  padding: 60px;
  border: 1px solid rgb(10, 10, 10);
  display: flex;
  flex-direction: column;}
</style>