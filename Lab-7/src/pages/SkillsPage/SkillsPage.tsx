import { type FC, useEffect, useState } from "react";
import cls from "./SkillsPage.module.css";
import { Loader } from "../../components/Loader";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../constants/global.constants";

interface ISkill {
  id: number;
  category: string;
  items: string[];
  icon: string;
}

export const SkillsPage: FC = () => {
  const [skills, setSkills] = useState<ISkill[]>([]);

  const [fetchSkills, isLoading, error] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);
    const skills = await response.json();

    setSkills(skills);
    return skills;
  });

  useEffect(() => {
    fetchSkills("skills");
  }, []);

  if (isLoading) return <Loader />;
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
