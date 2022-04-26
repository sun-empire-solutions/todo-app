import { useMemo, useState } from "react"

import { Header } from "../components/Header"
import { Input } from "../components/Input"
import { useTodos } from "../hooks/use-todos"
import { Filter } from "../components/Filter"
import { TodosList } from "./TodosList"
import { IFilter, ITodo } from "../types"

const TodosContainer = () => {
  const { todos, addTodo, saveTodos } = useTodos()
  const [filter, setFilter] = useState<IFilter>("all")
  const filteredTodos = useMemo<IFilteredTodos>(
    () => ({
      all: todos,
      active: todos.filter((item) => !item.completed),
      completed: todos.filter((item) => item.completed),
    }),
    [todos]
  )

  const removeTodo = (id: string) => {
    saveTodos(todos.filter((item) => item.id !== id))
  }

  const completeTodo = (id: string) => {
    saveTodos(
      todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    )
  }

  const clearCompleted = () => {
    saveTodos(todos.filter((item) => !item.completed))
  }

  const handleFilterChange = (value: IFilter) => {
    setFilter(value)
  }

  return (
    <div className="todos-container">
      <Header title="Todo" />
      <Input onSubmit={addTodo} />
      <TodosList
        items={filteredTodos[filter]}
        onRemove={removeTodo}
        onComplete={completeTodo}
        onClearCompleted={clearCompleted}
      />
      <Filter filter={filter} onFilterChange={handleFilterChange} />
    </div>
  )
}

type IFilteredTodos = { [key in IFilter]: ITodo[] }

export { TodosContainer }
