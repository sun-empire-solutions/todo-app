import { useState } from "react"
import { v4 } from "uuid"

import { Input } from "../components/Input"
import { ITodo } from "../types"

const ENTER_KEY_CODE = "Enter"

const TodosForm = ({ onSubmit }: IProps) => {
  const [inputValue, setInputValue] = useState("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleAddTodo = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === ENTER_KEY_CODE) {
      const newTodo: ITodo = { id: v4(), text: inputValue, completed: false }
      onSubmit(newTodo)
      setInputValue("")
    }
  }

  return (
    <Input
      inputValue={inputValue}
      handleInputChange={handleChange}
      handleAddTodo={handleAddTodo}
    />
  )
}

type IProps = {
  onSubmit: (todo: ITodo) => void
}

export { TodosForm }
