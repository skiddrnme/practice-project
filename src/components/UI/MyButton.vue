<template lang="">
  <button class="btn">
    <slot></slot>
  </button>
</template>
<script setup></script>
<style scoped>
.btn {
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  border-radius: 20px;
  transition: .1s linear;
  cursor: pointer;
}
.btn:hover{
    background: teal;
    color: #fff;
}

</style>
