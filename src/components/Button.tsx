const Button = ({ classNames, children, onClick }: IProps) => (
  <button className={classNames} onClick={onClick}>
    {children}
  </button>
)

type IProps = {
  children: JSX.Element
  classNames: string
  onClick: () => void
}

export { Button }
