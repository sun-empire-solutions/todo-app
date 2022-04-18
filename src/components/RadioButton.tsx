import { useState } from "react";

const RadioButton = ({ checked, disabled, onCheck }: IProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = () => {
    if (!isChecked && !disabled) {
      setIsChecked((checked) => !checked);
      onCheck();
    }
  };

  return (
    <button
      className={`radio-button ${isChecked ? "is-checked" : ""} ${
        disabled ? "disabled" : ""
      }`}
      onClick={handleClick}
    >
      <div className="white-background"></div>
    </button>
  );
};

type IProps = {
  checked: boolean;
  disabled: boolean;
  onCheck: () => void;
};

export { RadioButton };
