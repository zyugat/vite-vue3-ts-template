import { defineStore } from 'pinia'
import piniaStore from '@/store/index'
import { TodoState, ITodo, TODO_STATUS } from './types'

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
    // setTodo(partial: Partial<TodoState>) {
    //   this.$patch(partial)
    // },
    // 重置
    // resetTodo() {
    //   this.$reset()
    // },

    INIT_TODO_LIST(todoList: ITodo[]): void {
      this.TodoList = todoList
    },
    ADD_TODO_ITEM(todoContent: string): void {
      const todo: ITodo = {
        id: new Date().getTime(),
        content: todoContent,
        status: TODO_STATUS.WILL,
      }
      this.TodoList.unshift(todo)
    },
    CHANGE_TODO_ITEM(
      state: TodoState,
      todo: {
        id: number
        content: string
      },
    ): void {
      this.TodoList = this.TodoList.map((item: ITodo) => {
        if (item.id === todo.id) {
          item.content = todo.content
        }
        return item
      })
    },
    REMOVE_TODO(id: number): void {
      this.TodoList = this.TodoList.filter((item: ITodo) => item.id !== id)
    },
    SET_TODO_STATUS(id: number): void {
      this.TodoList = this.TodoList.map((item: ITodo) => {
        if (item.id === id) {
          item.status = item.status === TODO_STATUS.FINISHED ? TODO_STATUS.WILL : TODO_STATUS.FINISHED
        }
        return item
      })
    },
    // 确保只存在一个<正在完成>
    SET_DOING_STATUS(id: number): void {
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
})

export function useTodoOutsideStore() {
  return useTodoStore(piniaStore)
}
