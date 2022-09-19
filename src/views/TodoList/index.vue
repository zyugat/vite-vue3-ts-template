<script setup lang="ts">
import TodoList from 'components/todo/index.vue'
import { useTodoStore } from '@/store'

const todoStore = useTodoStore()

todoStore.$subscribe((mutation, state) => {
  // import { MutationType } from 'pinia'
  mutation.type // 'direct' | 'patch object' | 'patch function'
  // 与 cartStore.$id 相同
  mutation.storeId // 'cart'
  mutation.events

  // 每当它发生变化时，打印 123
  console.log(mutation.type, mutation.storeId, mutation.events)
})
</script>

<template>
  <div>
    <todo-list :todo-list="todoStore.$state.TodoList" />
  </div>
</template>

<style scoped lang="scss"></style>
