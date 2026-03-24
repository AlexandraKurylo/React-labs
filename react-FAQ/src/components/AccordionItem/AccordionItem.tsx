import type { FC } from "react";
import cls from "./AccordionItem.module.css";
import type { IAccordionItemProps } from "../../types/faq";
import { Button } from "../Button";

export const AccordionItem: FC<IAccordionItemProps> = ({ id, question, answer, isOpen, onToggle }) => {
  return (
    <div className={cls.item}>
      <button type="button" className={`${cls.header} ${isOpen ? cls.activeHeader : ""}`} onClick={onToggle}>
        <span>{question}</span>
        <span className={`${cls.icon} ${isOpen ? cls.iconRotated : ""}`}>&#9660;</span>
      </button>

      {isOpen && (
        <div className={cls.content}>
          <p className={cls.shortAnswer}>{answer}</p>
          <Button to={`/question/${id}`}>View more</Button>
        </div>
      )}
    </div>
  );
};
