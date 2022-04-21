import { ITodo } from "./../types";
import { RadioButton } from "./RadioButton";

// @ts-ignore
import iconCross from "./../assets/images/icon-cross.svg";

const TodoItem = ({
  item: { text, id, completed },
  onRemove,
  onComplete,
}: IProps) => {
  const handleRemove = () => {
    onRemove(id);
  };

  const handleComplete = () => {
    onComplete(id);
  };

  return (
    <div className="todo-item" key={id}>
      <div className="todo-radio">
        <RadioButton checked={completed} onCheck={handleComplete} />
      </div>

      <span className={`todo-text ${completed ? "is-completed" : ""}`}>
        {text}
      </span>
      <span className="remove-icon" role="button" onClick={handleRemove}>
        <img src={iconCross} />
      </span>
    </div>
  );
};

type IProps = {
  item: ITodo;
  onRemove: (id: string) => void;
  onComplete: (id: string) => void;
};

export { TodoItem };
