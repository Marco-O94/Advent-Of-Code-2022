<script setup lang="ts">
import { defineProps } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  day: number;
}>();
</script>

<template>
    <div class="day-in-progress">
        <div class="container mx-auto">
        <div class="flex flex-col items-center justify-center h-screen">
            <h1 class="text-6xl font-bold">Days in progress</h1>
        </div>
        </div>
    </div>
</template>