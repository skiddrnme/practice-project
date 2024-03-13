<script setup>




defineProps({
  order: Object
})
</script>

<template>
  <div class="orders">
    <div class="item-info">
      <div class="item-img">
        <img :src="order.img" alt="" width="60" />
      </div>
      <div class="item-text">
        <p>{{ order.name }}</p>
        <!-- <p>{{ order.author }}</p> -->
        <p style="font-weight: 700; margin-top: 10px;">{{ order.price }}</p>
      </div>
      <button @click="$emit('remove', order)" class="remove">
        <img src="../assets/img/remove.svg" alt="">
      </button>
    </div>
  </div>
</template>

<style scoped>
.orders {
  
  border-radius: 20px;
  background: #F3F3F3;
  padding: 10px 50px;
  position: relative;
}

.item-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-text{
  width: 150px;
}
.remove{
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 20px;
  border: 1px solid #d8d8d8;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: .1s linear;
}
.remove:hover{
  background: rgba(197, 30, 41, 0.75);
}

</style>
