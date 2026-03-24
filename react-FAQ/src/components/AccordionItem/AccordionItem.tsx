import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import cls from "./AccordionItem.module.css";
import type { IAccordionItemProps } from "../../types/faq";
import { Button } from "../Button";

export const AccordionItem: FC<IAccordionItemProps> = ({ id, question, answer, isOpen, onToggle }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`question/${id}`);
  };

  return (
    <div className={cls.item}>
      <button type="button" className={`${cls.header} ${isOpen ? cls.activeHeader : ""}`} onClick={onToggle}>
        <span>{question}</span>
        <span className={`${cls.icon} ${isOpen ? cls.iconRotated : ""}`}>&#9660;</span>
      </button>

      {isOpen && (
        <div className={cls.content}>
          <p className={cls.shortAnswer}>{answer}</p>
          <Button onClick={handleNavigate}>View more</Button>
        </div>
      )}
    </div>
  );
};
