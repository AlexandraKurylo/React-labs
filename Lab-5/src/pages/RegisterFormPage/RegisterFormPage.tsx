import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import cls from "./RegisterFormPage.module.css";
import type { FC } from "react";

export const RegisterFormPage: FC = () => {
  const navigate = useNavigate();
  return (
    <div className={cls.container}>
      <button className={cls.backBtn} onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className={cls.content}>
        <RegisterForm />
      </div>
    </div>
  );
};
