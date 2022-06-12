import { configureStore } from "@reduxjs/toolkit"

import { reducer } from "./slices"

const store = configureStore({
  reducer,
})

export { store }
