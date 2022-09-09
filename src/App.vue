<template>
  <div class="app">
    <todo-list :todo-list="todoStore.$state.TodoList" />

    <router-link to="/hello" class="link-a">hello</router-link>
    <router-link to="/word" class="link-a">word</router-link>

    {{ todoStore.$state }}
    <router-view />
  </div>
</template>

<script setup lang="ts">
import TodoList from 'components/todo/index.vue'
import { useTodoStore } from '@/store/modules/todo'

const todoStore = useTodoStore()
</script>

<style lang="scss">
.app {
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  select,
  input,
  label,
  button {
    vertical-align: middle;
  }

  .link-a {
    margin-right: 20px;
    font-size: 2rem;
    display: block;
  }
}
</style>
