<script setup>
import { defineProps } from 'vue'

defineProps({
  book: Object
})
</script>

<template>
  <div class="card">
    <img :src="book.imgSrc" alt="" width="150" />
    <p class="book-name">{{ book.bookTitle }}</p>
    <p class="book-name">{{ book.author }}</p>
    <p>Цена:</p>
    <p>{{ book.price }} руб.</p>
  </div>
</template>

<style scoped>
.card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid #f3f3f3;
  width: 250px;
  padding: 20px;
  border-radius: 40px;
  transition: transform 0.3s ease-in-out;
}
.card:hover {
  transform: scale(1.02);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
}
</style>
