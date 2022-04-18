import { ThemeSwitcher } from "./ThemeSwitcher";

const Header = ({ title }: IProps) => (
  <div className="header">
    <div className="title">{title}</div>
    <ThemeSwitcher />
  </div>
);

type IProps = {
  title: string;
};

export { Header };
