<script setup>
import CardComp from '@/components/CardComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'
import SearchComp from '@/components/SearchComp.vue'
</script>

<template>
  <main>
    <HeaderComp />
    <div class="home-info">
      <h2>Все книги</h2>
      <SearchComp />
    </div>

    <div class="card-wrapper">
      <CardComp />
      <CardComp />
      <CardComp />
      <CardComp />
      <CardComp />
      <CardComp />
      <CardComp />
      <CardComp />
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
</style>
