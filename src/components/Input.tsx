import { useState } from "react";
import { v4 } from "uuid";
import { useTodos } from "../hooks/use-todos";
import { ITodo } from "../types";
import { RadioButton } from "./RadioButton";

const ENTER_KEY_CODE = "Enter";

const Input = ({ onSubmit }: IProps) => {
  const [todoValue, setTodoValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(event.target.value);
  };

  const handleAddTodo = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === ENTER_KEY_CODE) {
      const newTodo: ITodo = { id: v4(), text: todoValue, completed: false };
      onSubmit(newTodo);
      setTodoValue("");
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={todoValue}
        onChange={handleChange}
        onKeyDown={handleAddTodo}
      />
      <div className="input-icon">
        <RadioButton checked={false} disabled onCheck={null} />
      </div>
    </div>
  );
};

type IProps = {
  onSubmit: (todo: ITodo) => void;
};

export { Input };
