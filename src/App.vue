<script setup>

import HeaderComp from './components/HeaderComp.vue'

</script>

<template>
  <div class="container">
    <header-comp />
    <router-view></router-view>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 1400px;
  margin: auto;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 20px;
  padding: 30px;
}
</style>
