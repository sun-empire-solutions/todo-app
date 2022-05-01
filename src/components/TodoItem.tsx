import { Draggable } from "react-beautiful-dnd"

import { ITodo } from "./../types"
import { RadioButton } from "./RadioButton"

// @ts-ignore
import iconCross from "./../assets/images/icon-cross.svg"

const TodoItem = ({
  item: { text, id, completed },
  index,
  onRemove,
  onComplete,
}: IProps) => {
  const handleRemove = () => {
    onRemove(id)
  }

  const handleComplete = () => {
    onComplete(id)
  }

  return (
    <Draggable key={id} draggableId={id} index={index}>
      {({ draggableProps, dragHandleProps, innerRef }) => (
        <div
          className="todo-item"
          ref={innerRef}
          {...draggableProps}
          {...dragHandleProps}
        >
          <div className="todo-radio">
            <RadioButton checked={completed} onCheck={handleComplete} />
          </div>

          <span className={`todo-text ${completed ? "is-completed" : ""}`}>
            {text}
          </span>
          <span className="remove-icon" role="button" onClick={handleRemove}>
            <img src={iconCross} />
          </span>
        </div>
      )}
    </Draggable>
  )
}

type IProps = {
  item: ITodo
  index: number
  onRemove: (id: string) => void
  onComplete: (id: string) => void
}

export { TodoItem }
