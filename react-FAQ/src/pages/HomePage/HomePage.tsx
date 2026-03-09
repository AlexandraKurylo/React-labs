import { useEffect, useState } from "react";
import cls from "./HomePage.module.css";
import type { FAQItem } from "../../types/faq";
import { AccordionItem } from "../../components/AccordionItem";
import { API_URL } from "../../constants";

export const HomePage = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setFaqs(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className={cls.loader}>Loading...</div>;
  if (error) return <div className={cls.error}>{error}</div>;

  return (
    <main className={cls.homePage}>
      <h1 className={cls.title}>Knowledge Base</h1>
      {faqs.map((faq) => (
        <div key={faq.id} className={cls.accordionWrapper}>
          <AccordionItem
            {...faq}
            isOpen={activeId === faq.id}
            onToggle={() => setActiveId(activeId === faq.id ? null : faq.id)}
          />
        </div>
      ))}
    </main>
  );
};
