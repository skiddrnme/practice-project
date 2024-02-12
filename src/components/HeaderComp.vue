<script setup></script>

<template>
  <header class="header">
    <div class="header-logo">
      <img src="../assets/img/logo.png" alt="" />
      <div class="logo-info">
        <h3>VUE BOOKS</h3>
        <p style="color: #9d9d9d">Лучший книжный магазин</p>
      </div>
    </div>
   

    <div class="header-info">
      <div class="order" style="display: flex; justify-content: space-between; align-items: center; width: 80px;">
        <img src="../assets/img/order.svg" alt="" />
        <p>0 руб.</p>
      </div>
      <div class="order" style="display: flex; justify-content: space-between; align-items: center; width: 100px;">
        <img src="../assets/img/like.png" alt="" />
        <p style="color: #9d9d9d">Закладки</p>
      </div>
      <div class="order" style="display: flex; justify-content: space-between; align-items: center; width: 100px;">
        <img src="../assets/img/Union.svg" alt="" />
        <p style="color: #9d9d9d">Профиль</p>
      </div>
    </div>

    
  </header>
  <div class="hr"></div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-logo {
  width: 270px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    
}
.hr{
    margin: 40px 0;
    border: 1px solid #eaeaea;
    width: 100%;
}
</style>
