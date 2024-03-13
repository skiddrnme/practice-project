<script setup>
import { defineProps } from 'vue'

defineProps({
  book: Object
})
</script>

<template>
  <div class="card" @click="$router.push(`book/${book.name}`)">
    <img :src="book.img" alt="" width="150" />
    <div class="card-info">
      <p class="book-name">{{ book.name }}</p>
      <!-- <p class="book-name">{{ book.author }}</p> -->
      <p>Цена:</p>
      <p style="font-weight: 700;">{{ book.price }} руб.</p>
    </div>
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
  padding: 10px;
  border-radius: 40px;
  transition: transform 0.3s ease-in-out;
}
.card:hover {
  transform: scale(1.02);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
}
.card-info{
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
