import { Link } from "react-router-dom";
import cls from "./Header.module.css";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";

export const Header = () => {
  return (
    <header className={cls.header}>
      <Link to="/" className={cls.logo}>
        <LuLayoutDashboard className={cls.logoIcon} />
        <span className={cls.logoText}>MyPortfolio</span>
      </Link>
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
