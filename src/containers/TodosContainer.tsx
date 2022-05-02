import { useMemo, useState } from "react"
import { DragDropContext, DropResult } from "react-beautiful-dnd"
import { useScreenDimensions } from "use-screen-dimensions"

import { Header } from "../components/Header"
import { Input } from "../components/Input"
import { useTodos } from "../hooks/use-todos"
import { Filter } from "../components/Filter"
import { TodosList } from "./TodosList"
import { IFilter, ITodo } from "../types"
import { Footer } from "../components/Footer"

const MOBILE_BREAKPOINT = 600

const TodosContainer = () => {
  const { todos, addTodo, saveTodos } = useTodos()
  const [filter, setFilter] = useState<IFilter>("all")
  const { width } = useScreenDimensions()
  const filteredTodos = useMemo<IFilteredTodos>(
    () => ({
      all: todos,
      active: todos.filter((item) => !item.completed),
      completed: todos.filter((item) => item.completed),
    }),
    [todos]
  )
  const isMobile = useMemo(() => width <= MOBILE_BREAKPOINT, [width])

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

  const handleDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) {
      return
    }
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    ) {
      return
    }
    const todosCopy = [...todos]
    const [removed] = todosCopy.splice(source.index, 1)
    todosCopy.splice(destination.index, 0, removed)
    saveTodos(todosCopy)
  }

  return (
    <div className="todos-container">
      <Header title="Todo" />
      <Input onSubmit={addTodo} />
      <DragDropContext onDragEnd={handleDragEnd}>
        <TodosList
          items={filteredTodos[filter]}
          onRemove={removeTodo}
          onComplete={completeTodo}
          onClearCompleted={clearCompleted}
        >
          {!isMobile && (
            <Filter filter={filter} onFilterChange={handleFilterChange} />
          )}
        </TodosList>
      </DragDropContext>
      {isMobile && (
        <Filter filter={filter} onFilterChange={handleFilterChange} />
      )}
      <Footer />
    </div>
  )
}

type IFilteredTodos = { [key in IFilter]: ITodo[] }

export { TodosContainer }
