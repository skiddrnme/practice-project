<script setup>
import SearchComp from '@/components/SearchComp.vue'
import CardList from '@/components/CardList.vue'
import MySelect from '@/components/UI/MySelect.vue'
import { useBookStore } from '@/store/books'
import { useOrderStore } from '@/store/order'
import OrderBar from '@/components/OrderBar.vue'
import CategoryItems from '@/components/CategoryItems.vue'
import OrderList from '@/components/OrderList.vue'
const book = useBookStore()
const order = useOrderStore()

const removeOrder = (o) => {
  order.orders = order.orders.filter((item) => item.id !== o.id)
}
</script>

<template>
  <main>
    <CategoryItems v-model="book.selectedCategory" :categories="book.categories" />
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
    <order-bar>
      <div class="content">
        <h3>Корзина</h3>
        <div class="order-list">
          <order-list @remove="removeOrder" :orders="order.orders" />
        </div>
      </div>
    </order-bar>
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
  gap: 15px;
}
.order-list {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
