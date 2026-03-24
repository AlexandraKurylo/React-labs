import { TaskCard } from "../../components/TaskCard";
import cls from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={cls.container}>
      <h1 className={cls.pageTitle}>Choose a task</h1>
      <div className={cls.grid}>
        <TaskCard
          title="Personal Task"
          description="Форма профіля користувача з валідацією React Hook Form та Zod. Поля: Нікнейм (без пробілів), Біографія (макс. 100 слів), Веб-сайт (url)."
          link="/profile"
        />
        <TaskCard
          title="Task 1"
          description="Форма реєстрації користувача з полями: Ім'я, Email, Вік, Пароль, Підтвердження пароля. Реалізувати валідацію та доступність."
          link="/register"
        />
      </div>
    </div>
  );
};
