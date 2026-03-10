import type { FC, ReactNode } from "react";
import cls from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className={cls.viewMoreBtn} onClick={onClick} type="button">
      {children}
    </button>
  );
};
