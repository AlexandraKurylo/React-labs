import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import cls from "./QuestionPage.module.css";
import type { FAQItem } from "../../types/faq";
import { API_URL } from "../../constants";

export const QuestionPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [data, setData] = useState<FAQItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/${id}`);
        if (!res.ok) throw new Error("Question not found");
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error");
      } finally {
        setLoading(false);
      }
    };
    fetchQuestion();
  }, [id]);

  if (loading) return <div className={cls.loader}>Loading...</div>;
  if (error || !data) return <div className={cls.error}>{error || "Not Found"}</div>;

  return (
    <div className={cls.container}>
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
    </div>
  );
};
