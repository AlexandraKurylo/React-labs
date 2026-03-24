import cls from "./QuestionDetail.module.css";
import type { FAQItem } from "../../types/faq";
import { useNavigate } from "react-router-dom";

interface QuestionDetailProps {
  data: FAQItem;
}

export const QuestionDetail = ({ data }: QuestionDetailProps) => {
  const navigate = useNavigate();

  return (
    <article className={cls.article}>
      <button className={cls.closeBtn} onClick={() => navigate("/")} aria-label="Close">
        &#215;
      </button>

      <h1 className={cls.mainTitle}>{data.question}</h1>
      <div className={cls.divider}></div>
      <p className={cls.fullText}>{data.fullAnswer}</p>

      {data.resources && data.resources.length > 0 && (
        <footer className={cls.resourcesSection}>
          <h3 className={cls.resTitle}>Sources & Resources</h3>
          <div className={cls.resList}>
            {data.resources.map((url, index) => (
              <a key={index} href={url} target="_blank" rel="noopener noreferrer" className={cls.resLink}>
                <span className={cls.url}>{url}</span>
                <span>&#10142;</span>
              </a>
            ))}
          </div>
        </footer>
      )}
    </article>
  );
};
