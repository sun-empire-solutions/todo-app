import { ITodo } from "../types"

const TODOS_STORAGE_KEY = "TODO_LIST"

const getTodos = (): ITodo[] =>
  JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) ?? []

const addTodo = (todo: ITodo): ITodo[] => {
  const currentTodosList = getTodos() ?? []
  const todosToBeSaved = [todo, ...currentTodosList]
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todosToBeSaved))
  return todosToBeSaved
}

const saveTodos = (todos: ITodo[]) => {
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))
}

export { getTodos, addTodo, saveTodos }
