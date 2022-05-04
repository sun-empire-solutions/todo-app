import { useState } from "react"
import { v4 } from "uuid"
import { BsPlus } from "react-icons/bs"

import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { ITodo } from "../types"
import { useBreakPoints } from "../hooks/use-breakpoints"

const ENTER_KEY_CODE = "Enter"

const TodosForm = ({ onSubmit }: IProps) => {
  const [inputValue, setInputValue] = useState("")
  const { isMobile } = useBreakPoints()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === ENTER_KEY_CODE) {
      addTodo()
    }
  }

  const addTodo = () => {
    const newTodo: ITodo = { id: v4(), text: inputValue, completed: false }
    onSubmit(newTodo)
    setInputValue("")
  }

  return (
    <div className="todos-form">
      <Input
        inputValue={inputValue}
        handleInputChange={handleChange}
        handleAddTodo={handleEnterPress}
      />
      {isMobile && (
        <Button classNames="add-button" onClick={addTodo}>
          <BsPlus />
        </Button>
      )}
    </div>
  )
}

type IProps = {
  onSubmit: (todo: ITodo) => void
}

export { TodosForm }
