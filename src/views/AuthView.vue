<template>
  <div class="form-container">
    <form @submit.prevent="register" v-if="login" class="form" action="/">
      <h4 class="form-label">Авторизация</h4>
      <input class="form-input" type="text" placeholder="Email" /><input
        class="form-input"
        type="text"
        placeholder="Password"
      />
      <my-button type="submit">Войти</my-button>
      <my-button @click="handleLoginForm" class="account">Нет аккаунта?</my-button>
    </form>
    <form @submit.prevent="register" v-else class="form" action="/">
      <h4 class="form-label">Регистрация</h4>
      <input class="form-input" type="text" placeholder="Email" /><input
        class="form-input"
        type="text"
        placeholder="Password"
      />
      <my-button>Зарегистрироваться</my-button>
      <my-button class="account">Уже есть аккаунт?</my-button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const register = (e) => {
  e.preventDefault()
}

const login = ref(false)

const handleLoginForm = () => {
  login.value = true
}

import MyButton from '@/components/UI/MyButton.vue'
</script>

<style scoped>
.form-container {
  width: 100%;
  max-width: 200px;
  margin: auto;
  margin-top: 200px;
  margin-bottom: 200px;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.form-input {
  width: 100%;
  height: 100%;
  padding-left: 30px; /* чтобы учесть иконку */
  border-radius: 20px;
  border: 1px solid #f3f3f3;
  background-color: transparent;
  outline: none; /* убираем рамку фокуса */
  padding: 10px;
}
.form-label {
  text-align: center;
  margin-bottom: 20px;
}
.account{
  border: none;
  
}
</style>
