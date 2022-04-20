import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { useTodos } from "../hooks/use-todos";
import { Footer } from "../components/Footer";
import { TodoItem } from "../components/TodoItem";

const TodosContainer = () => {
  const { todos, addTodo } = useTodos();

  return (
    <div className="todos-container">
      <Header title="Todo" />
      <Input onSubmit={addTodo} />
      {todos?.map((item) => (
        <TodoItem item={item} onRemove={() => {}} />
      ))}
      <Footer />
    </div>
  );
};

export { TodosContainer };
