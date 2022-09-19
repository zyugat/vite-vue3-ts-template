import { defineStore } from 'pinia'
import piniaStore from '@/store/index'
import { MainState } from './types'

export const useMainStore = defineStore('main', {
  state: (): MainState => ({
    title: 'hello Main Store',
    count: 1,
  }),
  getters: {
    changeCount: state => (sum: number) => (state.count += sum),
  },
  actions: {},
})

export function useMainOutsideStore() {
  return useMainStore(piniaStore)
}
