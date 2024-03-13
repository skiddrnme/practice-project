<script setup>
import { useModalStore } from '@/store/modal'

const bar = useModalStore()
const handleShowBar = () => {
  bar.show = false
}
</script>

<template>
  <aside class="order-bar" v-if="bar.show" @click.stop="handleShowBar">
    <div @click.stop class="bar-content">
      <slot></slot>
    </div>
  </aside>
</template>

<style scoped>
.order-bar {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;

  z-index: 10;
  opacity: 70;
  height: 100%;
  width: 100%;
}
.bar-content {
  width: 370px;
  height: 100%;
  background: #fff;
  right: 0;
  top: 0;
  position: fixed;
  padding: 20px;
  z-index: 20;
}
</style>
