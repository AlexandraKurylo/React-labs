import { useNavigate } from "react-router-dom";
import { UserProfileForm } from "../../components/UserProfileForm/UserProfileForm";
import cls from "./UserProfileFormPage.module.css";

export const UserProfileFormPage = () => {
  const navigate = useNavigate();

  return (
    <div className={cls.container}>
      <button className={cls.backBtn} onClick={() => navigate(-1)}>
        ← Назад
      </button>
      <div className={cls.content}>
        <UserProfileForm />
      </div>
    </div>
  );
};
