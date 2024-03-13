<script setup>
import OrderItem from './OrderItem.vue'

defineProps({
  orders: Array
})
</script>

<template>
  <order-item class="order" v-for="order in orders" :order="order" :key="order.id" @remove="$emit('remove', order)"/>
</template>

<style scoped></style>
