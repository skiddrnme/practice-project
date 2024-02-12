<script setup></script>

<template>
  <div action="/" class="search-container">
    <input type="text" class="search-input" placeholder="Поиск..." />
  </div>
</template>

<style scoped>
.search-container {
  position: relative;
  width: 250px;
  height: 24px;
}

.search-input {
  width: 100%;
  height: 100%;
  padding-left: 30px; /* чтобы учесть иконку */
  border-radius: 20px;
  border: 1px solid #f3f3f3;
  background-color: transparent;
  outline: none; /* убираем рамку фокуса */
  padding: 15px;
}

.search-input::placeholder {
  color: #999; /* цвет текста placeholder */
}

.search-input:focus::placeholder {
  color: transparent; /* убираем placeholder при фокусе */
}

.search-container::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
 
  background-size: cover;
}
</style>
