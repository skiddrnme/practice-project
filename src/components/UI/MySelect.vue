<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'

const props = defineProps({
  options: Array,
  modelValue: String
})

const selectedValue = ref(props.modelValue)

const emit = defineEmits(['update', 'update:modelValue'])

watch(selectedValue, (newValue) => {
  emit('update:modelValue', newValue)
})
const changeOption = (event) => {
  selectedValue.value = event.target.value
}
</script>

<template>
  <select
    class="select"
    
    v-model="selectedValue"
    @change="changeOption"
  >
    <option disabled value="">Выберите из списка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>
<style scoped>
.select {
  padding: 5px;
  border: 1px solid teal;
  border-radius: 10px;
}
.select:after{
	content: "";
	display: block;
	width: 25px;
	height: 25px;
	
	position: absolute;
	right: 5px;
	top: 5px;
}
</style>
