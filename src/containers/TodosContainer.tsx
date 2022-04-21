import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { useTodos } from "../hooks/use-todos";
import { Footer } from "../components/Footer";
import { TodosList } from "./TodosList";

const TodosContainer = () => {
  const { todos, addTodo, saveTodos } = useTodos();

  const removeTodo = (id: string) => {
    saveTodos(todos.filter((items) => items.id !== id));
  };

  return (
    <div className="todos-container">
      <Header title="Todo" />
      <Input onSubmit={addTodo} />
      <TodosList items={todos} onRemove={removeTodo} />
      <Footer />
    </div>
  );
};

export { TodosContainer };
