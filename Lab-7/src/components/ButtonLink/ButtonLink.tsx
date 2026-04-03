import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import cls from "./ButtonLink.module.css";

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
}

export const ButtonLink: FC<ButtonLinkProps> = ({ to, children }) => {
  return (
    <Link to={to} className={cls.button}>
      {children}
    </Link>
  );
};
