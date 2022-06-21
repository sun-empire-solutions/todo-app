import { createSelector, createSlice } from "@reduxjs/toolkit"

import { IFilter } from "../../types"

const filterSlice = createSlice({
  name: "filter",
  initialState: "all",
  reducers: {
    setFilter: (_, action) => {
      return action.payload
    },
  },
})

const selectSelf = (state) => state

const filterSelector = createSelector<any, IFilter>(
  selectSelf,
  (state) => state.filter
)

export { filterSelector }

export const { setFilter } = filterSlice.actions

export const filterReducer = filterSlice.reducer
