import { ITheme } from "../context/ThemeContext"

const TodoLayout = ({ children, theme }: IProps) => (
  <div className={`layout ${theme}`}>
    <PreloadImages />
    <div className="top top-background" />
    <div className="bottom bg-color" />
    <div className="content">{children}</div>
  </div>
)

const PreloadImages = () => (
  <div className="preload-images">
    {[...Array(4)].map((_, index) => (
      <div className={`bg-${index + 1}`}></div>
    ))}
  </div>
)

type IProps = {
  children: JSX.Element
  theme: ITheme
}

export { TodoLayout }
