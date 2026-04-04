import { type FC, useEffect, useState } from "react";
import cls from "./SkillsPage.module.css";

interface ISkill {
  id: number;
  category: string;
  items: string[];
  icon: string;
}

export const SkillsPage: FC = () => {
  const [skills, setSkills] = useState<ISkill[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8801/skills");
        if (!res.ok) throw new Error("Could not fetch skills data");
        const data = await res.json();
        setSkills(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSkills();
  }, []);

  if (isLoading) return <div className={cls.center}>Loading skills...</div>;
  if (error)
    return (
      <div className={cls.center} style={{ color: "red" }}>
        {error}
      </div>
    );

  return (
    <div className={cls.container}>
      <h1 className={cls.title}>Professional Skills</h1>
      <div className={cls.grid}>
        {skills.map((skill, index) => (
          <div key={skill.id} className={cls.card} style={{ "--i": index } as React.CSSProperties}>
            <div className={cls.cardHead}>
              <span className={cls.icon}>{skill.icon}</span>
              <h3>{skill.category}</h3>
            </div>
            <ul className={cls.list}>
              {skill.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
