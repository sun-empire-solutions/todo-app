import { createSelector, createSlice } from "@reduxjs/toolkit"

import { getTodos } from "./../../services/storage"

const todosSlice = createSlice({
  name: "todos",
  initialState: getTodos(),
  reducers: {
    addTodo: (state, action) => {
      return [action.payload, ...state]
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
    moveTodo: (state, action) => {
      const [removed] = state.splice(action.payload.source, 1)
      state.splice(action.payload.destination, 0, removed)
    },
    clearCompletedTodos: (state) => {
      return state.filter((todo) => !todo.completed)
    },
  },
})

const selectSelf = (state) => state

const todosSelector = createSelector(selectSelf, (state) => state.todos)

export { todosSelector }

export const {
  addTodo,
  completeTodo,
  removeTodo,
  clearCompletedTodos,
  moveTodo,
} = todosSlice.actions

export const todosReducer = todosSlice.reducer
