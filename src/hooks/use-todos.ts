import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { saveTodos as saveTodosService } from "../services/storage"
import { ITodo } from "../types"
import {
  addTodo as addTodoAction,
  removeTodo as removeTodoAction,
  completeTodo as completeTodoAction,
  clearCompletedTodos as clearCompletedTodosAction,
  moveTodo as moveTodoAction,
  todosSelector,
} from "../redux/slices/todos"

const useTodos = () => {
  const todos = useSelector(todosSelector)
  const dispatch = useDispatch()

  const saveTodos = (todos: ITodo[]) => {
    saveTodosService(todos)
  }

  const addTodo = (todo: ITodo) => {
    dispatch(addTodoAction(todo))
  }

  const removeTodo = (id: string) => {
    dispatch(removeTodoAction(id))
  }

  const completeTodo = (id: string) => {
    dispatch(completeTodoAction(id))
  }

  const moveTodo = (from: number, to: number) => {
    dispatch(moveTodoAction({ source: from, destination: to }))
  }

  const clearCompletedTodos = () => {
    dispatch(clearCompletedTodosAction())
  }

  useEffect(() => {
    saveTodos(todos)
  }, [todos])

  return {
    todos,
    addTodo,
    saveTodos,
    completeTodo,
    removeTodo,
    moveTodo,
    clearCompletedTodos,
  }
}

export { useTodos }
