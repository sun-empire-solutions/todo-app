import { ITheme } from "../context/ThemeContext";

const TodoLayout = ({ children, theme }: IProps) => (
  <div className={`layout ${theme}`}>
    <div className="top top-background" />
    <div className="bottom bg-color" />
    <div className="content">{children}</div>
  </div>
);

type IProps = {
  children: JSX.Element;
  theme: ITheme;
};

export { TodoLayout };
