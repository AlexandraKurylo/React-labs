import type { FC } from "react";
import cls from "./DataCard.module.css";

interface DataCardProps {
  title: string;
  data: Record<string, string | number> & { id: string | number };
  onDelete: (id: string | number) => void;
}

export const DataCard: FC<DataCardProps> = ({ title, data, onDelete }) => {
  const { id, ...displayData } = data;

  return (
    <div className={cls.card}>
      <div className={cls.cardHeader}>
        <h3 className={cls.cardTitle}>{title}</h3>
        <button className={cls.deleteBtn} onClick={() => onDelete(id)}>
          &times;
        </button>
      </div>
      <ul className={cls.list}>
        {Object.entries(displayData).map(([key, value]) => (
          <li key={key} className={cls.item}>
            <span className={cls.label}>{key}:</span>
            <span className={cls.value}>{String(value)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
