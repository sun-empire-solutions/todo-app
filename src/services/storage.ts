import { ITodo } from "../types"

const TODOS_STORAGE_KEY = "TODO_LIST"

const getTodos = (): ITodo[] =>
  JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) ?? []

const addTodo = (todo: ITodo) => {
  const currentTodosList = getTodos() ?? []
  localStorage.setItem(
    TODOS_STORAGE_KEY,
    JSON.stringify([...currentTodosList, todo])
  )
}

const saveTodos = (todos: ITodo[]) => {
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))
}

export { getTodos, addTodo, saveTodos }
