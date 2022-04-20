import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { useTodos } from "../hooks/use-todos";
import { Footer } from "../components/Footer";
import { TodosList } from "./TodosList";

const TodosContainer = () => {
  const { todos, addTodo } = useTodos();

  return (
    <div className="todos-container">
      <Header title="Todo" />
      <Input onSubmit={addTodo} />
      <TodosList items={todos} />
      <Footer />
    </div>
  );
};

export { TodosContainer };
