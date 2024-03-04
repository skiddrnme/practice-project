<script setup>

import SearchComp from '@/components/SearchComp.vue'
import CardList from '@/components/CardList.vue'
import MySelect from '@/components/UI/MySelect.vue'
import { useBookStore } from '@/store/books'

const book = useBookStore()

</script>

<template>
  <main>
    
    <div class="home-info">
      <h2>Все книги</h2>
      <div class="inputs">
        <my-select v-model="book.selectedSort" :options="book.options" />
        <SearchComp v-model="book.searchQuery" />
      </div>
    </div>

    <div class="card-wrapper">
      <card-list :books="book.searchAndSortedBooks" />
    </div>
  </main>
</template>

<style scoped>
.card-wrapper {
  gap: 46px;
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
}
.home-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.inputs {
  display: flex;
  justify-content: space-between;
  width: 400px;
  align-items: center;
}
</style>
