import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { QuestionDetail } from "../../components/QuestionDetail/QuestionDetail";
import type { FAQItem } from "../../types/faq";
import { API_URL } from "../../constants";
import cls from "./QuestionPage.module.css";

export const QuestionPage = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<FAQItem | null>(null);
  const [loading, setLoading] = useState(false);
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
      <QuestionDetail data={data} />
    </div>
  );
};
