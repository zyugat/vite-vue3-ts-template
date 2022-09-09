import { defineStore } from 'pinia'
import piniaStore from '@/store/index'
import { TodoState } from './types'

export const useTodoStore = defineStore('app', {
  state: (): TodoState => ({
    title: 'Todo List Title',
    TodoList: [],
  }),
  getters: {
    getTodo(state: TodoState): TodoState {
      return { ...state }
    },
  },
  actions: {
    // 设置
    setTodo(partial: Partial<TodoState>) {
      this.$patch(partial)
    },
    // 重置
    resetTodo() {
      this.$reset()
    },
  },
})

export function useTodoOutsideStore() {
  return useTodoStore(piniaStore)
}
