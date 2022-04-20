import { ITodo } from "./../types";
import { RadioButton } from "./RadioButton";

// @ts-ignore
import iconCross from "./../assets/images/icon-cross.svg";

const TodoItem = ({ item: { text, id }, onRemove }: IProps) => {
  return (
    <div className="todo-item" key={id}>
      <div className="todo-radio">
        <RadioButton checked={false} onCheck={null} />
      </div>

      <span className="text">{text}</span>
      <span className="remove-icon">
        <img src={iconCross} />
      </span>
    </div>
  );
};

type IProps = { item: ITodo; onRemove: (id: string) => void };

export { TodoItem };
