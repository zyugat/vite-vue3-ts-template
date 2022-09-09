<script setup lang="ts">
import { PropType, onMounted } from 'vue'
import { Store, useStore } from 'vuex'
import { useTodoStore } from '@/store/modules/todo'
import { ITodo } from '@/store/modules/todo/types'

import TodoItem from 'components/todo/TodoItem.vue'
import TodoInput from 'components/todo/TodoInput.vue'

const props = defineProps({
  todoList: {
    type: Array as PropType<ITodo[]>,
    required: true,
  },
})
// 向 TodoItem组件 传递方法,用来对状态的操作
const { REMOVE_TODO, CHANGE_TODO_ITEM, SET_TODO_STATUS, SET_DOING_STATUS } = useTodoStore()
defineExpose({ REMOVE_TODO, CHANGE_TODO_ITEM, SET_TODO_STATUS, SET_DOING_STATUS })

// 初始化列表
const store = useTodoStore()
</script>

<template>
  <div class="wrapper">
    点击文字可修改内容。
    <todo-input class="todo-input" />
    <todo-item
      v-for="item of todoList"
      :key="item.id"
      class="todo-item"
      :item="item"
      @change-todo-item="CHANGE_TODO_ITEM"
      @remove-todo="REMOVE_TODO"
      @set-status="SET_TODO_STATUS"
      @set-doing="SET_DOING_STATUS"
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
