import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import cls from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ children, to, onClick, type = "button", disabled, className }) => {
  if (to) {
    return (
      <Link to={to} className={`${cls.btn} ${className || ""}`}>
        {children}
      </Link>
    );
  }
  return (
    <button className={`${cls.btn} ${className || ""}`} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
};
