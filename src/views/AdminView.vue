<template>
  <div>
    <h3>Добро пожаловать, Аскер</h3>
    <div class="btn-group">
      <my-button>Добавить книгу</my-button>
      <my-button>Добавить категорию</my-button>
      <my-button>Добавить автора</my-button>
    </div>

    
  </div>
</template>
<script setup>
import MyButton from '@/components/UI/MyButton.vue'
import CardList from '@/components/CardList.vue';
</script>
<style scoped>
.btn-group {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 200px;
  
  margin-top: 40px;
}
</style>
