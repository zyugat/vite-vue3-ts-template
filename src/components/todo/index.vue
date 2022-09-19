<script setup lang="ts">
import { useTodoStore } from '@/store'
import { ITodo } from '@/store/modules/todo/types'

import TodoItem from 'components/todo/TodoItem.vue'
import TodoInput from 'components/todo/TodoInput.vue'

const props = defineProps({
  todoList: {
    type: Array<ITodo>,
    required: true,
  },
})

// 向 TodoItem组件 传递方法,用来对状态的操作
const { setDoingStatus, setTodoStatus, removeTodoItem, changeTodoItem, addTodoItem } =
  useTodoStore()
defineExpose({ setDoingStatus, setTodoStatus, removeTodoItem, changeTodoItem, addTodoItem })
</script>

<template>
  <div class="wrapper">
    点击文字可修改内容。
    <todo-input class="todo-input" @add-todo="addTodoItem" />
    <todo-item
      v-for="item of todoList"
      :key="item.id"
      class="todo-item"
      :item="item"
      @change-todo-item="changeTodoItem"
      @remove-todo="removeTodoItem"
      @set-status="setTodoStatus"
      @set-doing="setDoingStatus"
    />
  </div>
</template>

<style lang="scss">
.wrapper {
  border: 1px red solid;
  width: 300px;
  .todo-input {
    margin: 5px;
  }
  .todo-item {
    padding: 0px 5px;
  }
}
</style>
