import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

import { useTodoStore } from './modules/todo'
import { TodoState } from './modules/todo/types'
import { useMainStore } from './modules/main'
import { MainState } from './modules/main/types'

export { useTodoStore, useMainStore }
export type { TodoState, MainState }
export default pinia

// 1. 导入 store
// import { useMainStore } from '@/store'

// 2. 获取 state
// const mainStore = useMainStore()
// 获取数据三种办法

// <todo-list :todo-list="todoStore.$state.TodoList" />

// mainStore.title

// mainStore.$patch(state => {
//   state.count++
// })

// 用来监听数据变化, 详情看文档
// mainStore.$subscribe((mutation, state) => {})

// 3. 解构导出方法
// const { } = useMainStore()

// 补: 如需将方法传递给子组件,需要使用 defineExpose 导出
// defineExpose({})

// 4.使用 Action/Getter
// 直接调用即可
// emit('ActionName', data)
