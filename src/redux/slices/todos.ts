import { createSlice } from "@reduxjs/toolkit"

import { getTodos } from "./../../services/storage"

const todosSlice = createSlice({
  name: "todos",
  initialState: getTodos(),
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    completeTodo: (state, action) => {
      state[action.payload].completed = true
    },
    removeTodo: (state, action) => {
      state.splice(action.payload, 1)
    },
  },
})

export const { addTodo, completeTodo, removeTodo } = todosSlice.actions

export const todosReducer = todosSlice.reducer
