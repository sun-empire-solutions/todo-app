import { combineReducers } from "redux"

import { filterReducer } from "./filter"
import { todosReducer } from "./todos"

const reducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
})

export { reducer }
