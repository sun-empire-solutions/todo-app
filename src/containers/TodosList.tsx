import { useMemo } from "react"
import { DragDropContext, Droppable } from "react-beautiful-dnd"

import { TodoItem } from "../components/TodoItem"
import { ITodo } from "../types"

const TodosList = ({
  items,
  onRemove,
  onComplete,
  onClearCompleted,
}: IProps) => {
  const itemsLeft = useMemo(
    () => items.filter((item) => !item.completed).length,
    [items]
  )
  const handleClearCompleted = () => {
    onClearCompleted()
  }

  return (
    <div className="todos-list">
      <DragDropContext onDragEnd={() => {}}>
        <Droppable droppableId="todos">
          {({ droppableProps, innerRef, placeholder }) => (
            <div
              className="todos-list__items"
              ref={innerRef}
              {...droppableProps}
            >
              {items?.map((item, index) => (
                <TodoItem
                  key={index}
                  item={item}
                  index={index}
                  onRemove={onRemove}
                  onComplete={onComplete}
                />
              ))}
              {placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className="todos-list__footer todo-item">
        <span className="items-left">{`${itemsLeft} items left`}</span>
        <span
          className="clear-button"
          role="button"
          onClick={handleClearCompleted}
        >
          Clear completed
        </span>
      </div>
    </div>
  )
}

type IProps = {
  items: ITodo[]
  onRemove: (id: string) => void
  onComplete: (id: string) => void
  onClearCompleted: () => void
}
export { TodosList }
