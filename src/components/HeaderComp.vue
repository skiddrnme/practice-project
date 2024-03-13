<script setup>
import { ref } from 'vue'
import { useModalStore } from '@/store/modal'
import { useOrderStore } from '@/store/order';
import MyButton from '@/components/UI/MyButton.vue'
const bar = useModalStore()
const order = useOrderStore()
const login = ref(false)
const count = ref(0)

const handleChangeLogin = () => {
  login.value = true
}
</script>

<template>
  <header class="header">
    <RouterLink to="/" style="text-decoration: none">
      <div class="header-logo">
        <img src="../assets/img/logo.png" alt="" />
        <div class="logo-info">
          <h3 style="color: #000">VUE BOOKS</h3>
          <p style="color: #9d9d9d">Лучший книжный магазин</p>
        </div>
      </div>
    </RouterLink>
    <div class="header-info">
      <div class="">
        <RouterLink to="/admin"><my-button>Админ</my-button></RouterLink>
      </div>
      <div
        class="order"
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 80px;
          cursor: pointer;
        "
        @click="() => (bar.show = true)"
      >
        <img src="../assets/img/order.svg" alt="" />
        <p>{{ order.orderPrice }} руб.</p>
      </div>

      <div
        class="order"
        style="display: flex; justify-content: space-between; align-items: center; width: 100px"
      >
        <img src="../assets/img/like.png" alt="" />
        <p style="color: #9d9d9d">Закладки</p>
      </div>
      <div class="" v-if="login">
        <div
          class="order"
          style="display: flex; justify-content: space-between; align-items: center; width: 100px"
        >
          <img src="../assets/img/Union.svg" alt="" />
          <p style="color: #9d9d9d">Профиль</p>
        </div>
      </div>
      <div class="" v-else>
        <my-button @click="handleChangeLogin">Войти</my-button>
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
.header-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
}
.hr {
  margin: 40px 0;
  border: 1px solid #eaeaea;
  width: 100%;
}
</style>
