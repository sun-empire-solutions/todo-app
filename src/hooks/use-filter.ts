import { useDispatch, useSelector } from "react-redux"

import { filterSelector, setFilter } from "../redux/slices/filter"

const useFilter = () => {
  const filter = useSelector(filterSelector)
  const dispatch = useDispatch()

  const handleFilterChange = (filter: string) => {
    dispatch(setFilter(filter))
  }

  return { filter, handleFilterChange }
}

export { useFilter }
