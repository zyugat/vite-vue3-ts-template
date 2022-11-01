<template>
  <div class="todo-input">
    <input v-model="todoValue" type="text" @keyup.enter="addTodoValue" />
    <button @click="addTodoValue">确认</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 保存输入框的值
const todoValue = ref<string>('')

const emit = defineEmits(['addTodo'])

const addTodoValue = (): void => {
  // 判断是否为空
  if (todoValue.value.trim().length) {
    emit('addTodo', todoValue.value)
    todoValue.value = ''
  }
}
</script>

<style lang="scss">
.todo-input {
  input {
    display: inline-block;
    outline: none;
    height: 20px;
    width: 71%;
  }
  button {
    display: inline-block;
    margin-left: 5px;
  }
}
</style>
