import { useNavigate } from "react-router-dom";
import ReactLogo from "../../assets/react.svg";
import cls from "./Header.module.css";
import { ThemeSwitcher } from "../ThemeSwitcher";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={cls.header}>
      <p onClick={() => navigate("/")}>
        <img src={ReactLogo} alt="react logo" />
        <span>ReactBase</span>
      </p>
      <ThemeSwitcher />
    </header>
  );
};
