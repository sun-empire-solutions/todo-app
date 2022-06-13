import { createSelector, createSlice } from "@reduxjs/toolkit"

import { getTodos } from "./../../services/storage"

const todosSlice = createSlice({
  name: "todos",
  initialState: getTodos(),
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    completeTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    removeTodo: (state, action) => {
      state.splice(action.payload, 1)
    },
    clearCompletedTodos: (state) => {
      return state.filter((todo) => !todo.completed)
    },
  },
})

const selectSelf = (state) => state

const todosSelector = createSelector(selectSelf, (state) => state.todos)

export { todosSelector }

export const { addTodo, completeTodo, removeTodo, clearCompletedTodos } =
  todosSlice.actions

export const todosReducer = todosSlice.reducer
