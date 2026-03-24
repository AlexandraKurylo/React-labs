import { TaskCard } from "../../components/TaskCard";
import cls from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={cls.container}>
      <h1 className={cls.pageTitle}>Оберіть завдання</h1>
      <div className={cls.grid}>
        <TaskCard
          title="Завдання 1"
          description="Редагування профілю користувача з валідацією React Hook Form та Zod."
          link="/profile"
        />
        <TaskCard title="Завдання 2" description="Тут буде ваша друга форма. Опис можна змінити пізніше." link="/task-2" />
      </div>
    </div>
  );
};
