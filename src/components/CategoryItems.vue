<script setup>
import { ref, watch } from 'vue'
import MyButton from './UI/MyButton.vue'




const props = defineProps({
  categories: Array,
  modelValue: Object
})
const selectedValue = ref(props.modelValue)
const emit = defineEmits(['update', 'update:modelValue'])

watch(selectedValue, (newValue) => {
  emit('update:modelValue', newValue)
})

const changeCategory = (cat) => {
  selectedValue.value = cat
}

</script>

<template>
  <div class="category">
    <div v-for="cat in categories" :key="cat.id" >
      <my-button  @click="changeCategory(cat)">{{ cat.name }}</my-button>
    </div>
  </div>
</template>

<style scoped>
.category {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1050px;
  margin: auto;
  margin-bottom: 50px;
}
</style>
