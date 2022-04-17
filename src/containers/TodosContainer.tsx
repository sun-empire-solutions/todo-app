import { useState } from "react";
import { uuid } from "uuidv4";

import { Header } from "../components/Header";
import { useTodos } from "../hooks/use-todos";
import { ITodo } from "../types";

const ENTER_KEY_CODE = "Enter";

const TodosContainer = () => {
  const { todos, addTodo } = useTodos();
  const [todoValue, setTodoValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(event.target.value);
  };

  const handleAddTodo = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === ENTER_KEY_CODE) {
      const newTodo: ITodo = { id: uuid(), text: todoValue, completed: false };
      addTodo(newTodo);
      setTodoValue("");
    }
  };

  return (
    <div className="todos-container">
      <Header title="Todo" />
      <input
        type="text"
        value={todoValue}
        onChange={handleChange}
        onKeyDown={handleAddTodo}
      />
      {todos?.map((todoItem, index) => (
        <div key={index}>{todoItem.text}</div>
      ))}
    </div>
  );
};

export { TodosContainer };
