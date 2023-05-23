// @ts-ignore
import iconCheck from "./../assets/images/icon-check.svg"

const RadioButton = ({ checked, disabled }: IProps) => {
  return (
    <div
      className={`radio-button ${checked ? "is-checked" : ""} ${
        disabled ? "disabled" : ""
      }`}
    >
      <img src={iconCheck} />
      <div className="white-background"></div>
    </div>
  )
}

type IProps = {
  checked: boolean
  disabled?: boolean
}

export { RadioButton }
