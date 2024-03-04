<script setup>
import CardComp from './CardComp.vue'

import { defineProps } from 'vue';

defineProps({
  books:Array
})
</script>

<template>
  <card-comp class="card" v-for="book in books" :book="book" :key="book.id" />
</template>

<style scoped>
    
</style>
