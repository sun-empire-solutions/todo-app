import { useState } from "react";

// @ts-ignore
import iconCheck from "./../assets/images/icon-check.svg";

const RadioButton = ({ checked, disabled, onCheck }: IProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = () => {
    if (!disabled) {
      setIsChecked((checked) => !checked);
      if (!isChecked) {
        onCheck();
      }
    }
  };

  return (
    <button
      className={`radio-button ${isChecked ? "is-checked" : ""} ${
        disabled ? "disabled" : ""
      }`}
      onClick={handleClick}
    >
      <img src={iconCheck} />
      <div className="white-background"></div>
    </button>
  );
};

type IProps = {
  checked: boolean;
  disabled?: boolean;
  onCheck: () => void;
};

export { RadioButton };
