import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import cls from "./FirstTaskPage.module.css";

export const FirstTaskPage = () => {
  const navigate = useNavigate();

  return (
    <div className={cls.container}>
      <button className={cls.backBtn} onClick={() => navigate(-1)}>
        ← Назад до завдань
      </button>

      <div className={cls.content}>
        <h1 className={cls.title}>Завдання 2</h1>
        <div className={cls.placeholder}>
          <p>Тут буде ваша нова форма або контент для другого завдання.</p>
          {/* Коли створиш форму, просто встав її сюди */}
          <div className={cls.dummyForm}>
            <p>Місце для майбутньої форми...</p>
          </div>
          <Button onClick={() => navigate("/")}>Повернутися на головну</Button>
        </div>
      </div>
    </div>
  );
};
