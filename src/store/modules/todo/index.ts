import { defineStore } from 'pinia'
import piniaStore from '@/store/index'

export const useTodoStore = defineStore('app', {
  state: () => ({
    title: 'Todo List Title',
    h1: 'Todo List h1',
    theme: '',
  }),
  getters: {},
  actions: {},
})

export function useTodoOutsideStore() {
  return useTodoStore(piniaStore)
}
