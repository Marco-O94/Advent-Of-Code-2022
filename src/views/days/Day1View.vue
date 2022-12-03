<script setup lang="ts">
import { ref } from 'vue';
interface DataModel {
    meals : string;
    max : number;
}
const data = ref({
    meals: '',
    max: 0,
} as DataModel)

function getResult() {
    const calories = data.value.meals.split('\n');
    let calorySum = 0, calMax = 0;  
    calories.forEach((cal) => {
        if(cal != '') {
            calorySum += parseInt(cal);
        }else{
            calMax < calorySum ? (calMax = calorySum, calorySum = 0) : calorySum = 0;
        }

    });
    console.log(calMax);
    data.value.max = calMax;
    return void 0;
    
}
</script>

<template>
    <div class="container p-5 bg-gray-50 rounded dark:bg-gray-800 dark:border-gray-700">
        <h1 class="text-gray-900 text-4xl font-bold dark:text-white">Inserisci la lista degli elfi </h1>
        <div class="mt-5 px-10">
        <textarea v-model="data.meals" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Inserisci qui la lista..."></textarea>
        <button @click="getResult" type="button" class="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Trova l'elfo con più calorie</button>
    <p v-if="data.max" class="text-gray-900 mt-5 text-2xl font-bold dark:text-white">Trovato! Ha {{ data.max }}</p>
    </div>
    </div>
</template>