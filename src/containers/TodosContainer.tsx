import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { useTodos } from "../hooks/use-todos";
import { Footer } from "../components/Footer";
import { TodosList } from "./TodosList";

const TodosContainer = () => {
  const { todos, addTodo, saveTodos } = useTodos();

  const removeTodo = (id: string) => {
    saveTodos(todos.filter((item) => item.id !== id));
  };

  const completeTodo = (id: string) => {
    saveTodos(
      todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const clearCompleted = () => {
    saveTodos(todos.filter((item) => !item.completed));
  };

  return (
    <div className="todos-container">
      <Header title="Todo" />
      <Input onSubmit={addTodo} />
      <TodosList
        items={todos}
        onRemove={removeTodo}
        onComplete={completeTodo}
        onClearCompleted={clearCompleted}
      />
      <Footer />
    </div>
  );
};

export { TodosContainer };
