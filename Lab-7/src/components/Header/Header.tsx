import { useNavigate } from "react-router-dom";
import ReactLogo from "../../assets/react.svg";
import cls from "./Header.module.css";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={cls.header}>
      <p onClick={() => navigate("/")}>
        <img src={ReactLogo} alt="react logo" />
        <span>ReactBase</span>
      </p>
      <div className={cls.navLinksWrapper}>
        <NavLink className={({ isActive }) => (isActive ? `${cls.link} ${cls.active}` : cls.link)} to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? `${cls.link} ${cls.active}` : cls.link)} to="/portfolio">
          Portfolio
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? `${cls.link} ${cls.active}` : cls.link)} to="/skills">
          Skills
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? `${cls.link} ${cls.active}` : cls.link)} to="/contacts">
          Contacts
        </NavLink>
      </div>
      <ThemeSwitcher />
    </header>
  );
};
