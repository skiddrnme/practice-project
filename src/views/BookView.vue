<script setup>
import { useBookStore } from '@/store/books'
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import MyButton from '@/components/UI/MyButton.vue'
import { useOrderStore } from '@/store/order'

const route = useRoute()
const books = useBookStore()
const book = ref(null)

const order = useOrderStore()

const handleAddOrder = (item) => {
  order.addOrder(item)
}

onBeforeMount(() => {
  let bookData = books.books.find((item) => item.name == route.params.name)
  if (bookData) {
    book.value = bookData
  }
  return {};
})

</script>

<template>
  <div class="book">
    <div class="book-wrapper">
      <div class="book-img">
        <img :src="book.img" alt="">
      </div>
      <div class="book-info">
        <h2>{{ book.bookName }}</h2>
      </div>
      <div class="book-form">
        <div class="book-price">{{ book.price }}</div>
        <my-button class="buy">Купить</my-button>
        <br />
        <my-button @click="handleAddOrder(book)">Добавить в корзину</my-button>
      </div>
    </div>
    <div class="book-note"></div>
    <div class="book-reviews"></div>
  </div>
</template>

<style scoped>
.book-wrapper {
  display: flex;
  justify-content: space-around;
}
</style>
