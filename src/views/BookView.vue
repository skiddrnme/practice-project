<script setup></script>

<template>
  <div class="book">
    <div class="book-wrapper">
      <div class="book-img">
        <img
          src="../assets/img/books-img/book.jpg"
          alt=""
        />
      </div>
      <div class="book-info">
        <h2>Дикие сыщики</h2>
        <p>Роберто Боланьо</p>
      </div>
      <div class="book-form">
        <div class="book-price">1500</div>
        <button class="buy">
            Купить
        </button>
      </div>
    </div>
    <div class="book-note"></div>
    <div class="book-reviews"></div>
  </div>
</template>

<style scoped>
    .book-wrapper{
        display: flex;
        justify-content: space-between;
    
    }
</style>
