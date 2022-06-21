import { useMemo } from "react"
import { DragDropContext, DropResult } from "react-beautiful-dnd"

import { Header } from "../components/Header"
import { useTodos } from "../hooks/use-todos"
import { Filter } from "../components/Filter"
import { TodosList } from "./TodosList"
import { IFilter, ITodo } from "../types"
import { Footer } from "../components/Footer"
import { TodosForm } from "./TodosForm"
import { useBreakPoints } from "../hooks/use-breakpoints"
import { useFilter } from "../hooks/use-filter"

const TodosContainer = () => {
  const {
    todos,
    addTodo,
    moveTodo,
    completeTodo,
    removeTodo,
    clearCompletedTodos,
  } = useTodos()
  const { filter, handleFilterChange } = useFilter()
  const { isMobile } = useBreakPoints()
  const filteredTodos = useMemo<IFilteredTodos>(
    () => ({
      all: todos,
      active: todos.filter((item) => !item.completed),
      completed: todos.filter((item) => item.completed),
    }),
    [todos]
  )

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
    moveTodo(source.index, destination.index)
  }

  return (
    <div className="todos-container">
      <Header title="Todo" />
      <TodosForm onSubmit={addTodo} />
      <DragDropContext onDragEnd={handleDragEnd}>
        <TodosList
          items={filteredTodos[filter]}
          onRemove={removeTodo}
          onComplete={completeTodo}
          onClearCompleted={clearCompletedTodos}
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
