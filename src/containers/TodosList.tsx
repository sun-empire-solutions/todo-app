import { useMemo } from "react";
import { TodoItem } from "../components/TodoItem";
import { ITodo } from "../types";

const TodosList = ({ items }: IProps) => {
  const itemsLeft = useMemo(
    () => items.filter((item) => !item.completed).length,
    [items]
  );

  return (
    <div className="todos-list">
      <div className="items">
        {items?.map((item) => (
          <TodoItem item={item} onRemove={() => {}} />
        ))}
      </div>
      <div className="footer todo-item">
        <span className="items-left">{`${itemsLeft} items left`}</span>
        <span className="clear" role="button">
          Clear completed
        </span>
      </div>
    </div>
  );
};

type IProps = {
  items: ITodo[];
};
export { TodosList };
