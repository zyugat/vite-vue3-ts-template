export interface TodoState {
  title: 'Todo List Title'
  TodoList: ITodo[]
}

export interface ITodo {
  id: number
  content: string
  status: TODO_STATUS
}

export enum TODO_STATUS {
  WILL = 'will',
  DOING = 'doing',
  FINISHED = 'finished',
}
