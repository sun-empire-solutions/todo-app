import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { useTodos } from "../hooks/use-todos";

const TodosContainer = () => {
  const { todos, addTodo } = useTodos();

  return (
    <div className="todos-container">
      <Header title="Todo" />
      <Input onSubmit={addTodo} />
      {todos?.map(({ text, id }) => (
        <div key={id}>{text}</div>
      ))}
    </div>
  );
};

export { TodosContainer };
