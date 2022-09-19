import { defineStore } from 'pinia'
import piniaStore from '@/store/index'
import { TODO_STATUS } from './types'
import type { TodoState, ITodo } from './types'

export const useTodoStore = defineStore('todo', {
  state: (): TodoState => ({
    title: 'Todo List Title',
    TodoList: [] as ITodo[],
  }),
  getters: {
    getTodo(state: TodoState): TodoState {
      return { ...state }
    },
  },
  actions: {
    // 设置
    // setTodo(partial: Partial<TodoState>) {
    //   this.$patch(partial)
    // },
    // 重置
    // resetTodo() {
    //   this.$reset()
    // },

    addTodoItem(todoContent: string): void {
      const todo: ITodo = {
        id: new Date().getTime(),
        content: todoContent,
        status: TODO_STATUS.WILL,
      }
      this.TodoList.unshift(todo)
    },
    changeTodoItem(todo: { id: number; content: string }): void {
      this.TodoList = this.TodoList.map((item: ITodo) => {
        if (item.id === todo.id) {
          item.content = todo.content
        }
        return item
      })
    },
    removeTodoItem(id: number): void {
      this.TodoList = this.TodoList.filter((item: ITodo) => item.id !== id)
    },
    setTodoStatus(id: number): void {
      this.TodoList = this.TodoList.map((item: ITodo) => {
        if (item.id === id) {
          item.status =
            item.status === TODO_STATUS.FINISHED ? TODO_STATUS.WILL : TODO_STATUS.FINISHED
        }
        return item
      })
    },
    // 确保只存在一个<正在完成>
    setDoingStatus(id: number): void {
      this.TodoList = this.TodoList.map((item: ITodo) => {
        if (item.id !== id) {
          if (item.status === TODO_STATUS.DOING) {
            item.status = TODO_STATUS.WILL
          }
        } else {
          item.status = item.status === TODO_STATUS.WILL ? TODO_STATUS.DOING : TODO_STATUS.WILL
        }

        return item
      })
    },
  },
  persist: true,
  // persist: {
  //   // storage: sessionStorage,
  //   storage: localStorage,
  //   paths: ['TodoList'],
  // },
})

export function useTodoOutsideStore() {
  return useTodoStore(piniaStore)
}
