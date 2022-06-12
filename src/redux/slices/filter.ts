import { createSlice } from "@reduxjs/toolkit"

const filterSlice = createSlice({
  name: "filter",
  initialState: "all",
  reducers: {
    setFilter: (state, action) => {
      state = action.payload
    },
  },
})

export const { setFilter } = filterSlice.actions

export const filterReducer = filterSlice.reducer
