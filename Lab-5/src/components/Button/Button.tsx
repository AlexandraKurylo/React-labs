import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import cls from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, to, onClick, type = "button", disabled }) => {
  if (to) {
    return (
      <Link to={to} className={cls.btn}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls.btn} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
};
