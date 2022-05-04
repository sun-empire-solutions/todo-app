import { RadioButton } from "./RadioButton"

const Input = ({ inputValue, handleInputChange, handleAddTodo }: IProps) => {
  return (
    <div className="input-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleAddTodo}
        placeholder="Create a new todo..."
      />
      <div className="input-icon">
        <RadioButton checked={false} disabled onCheck={null} />
      </div>
    </div>
  )
}

type IProps = {
  inputValue: string
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleAddTodo: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

export { Input }
