import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import cls from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  to?: string;
}

export const Button: FC<ButtonProps> = ({ onClick, children, to }) => {
  if (to) {
    return (
      <Link className={cls.viewMoreBtn} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls.viewMoreBtn} onClick={onClick} type="button">
      {children}
    </button>
  );
};
