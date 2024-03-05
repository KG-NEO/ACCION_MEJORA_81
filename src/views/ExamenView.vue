<template>
    
    <div>

<div class="Preguntas">
    <h2> {{ props.id     }}</h2>
    <h3> {{ props.title }}</h3>
    <p> {{ props.options }}</p>

</div>

   </div>


</template>
<script lang="ts" setup>  

import type { IQuiz } from '@/interfaces/IQuiz';


const props = defineProps<IQuiz>();





</script>

<style scoped> </style>