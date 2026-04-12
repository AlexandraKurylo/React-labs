import { type FC, useEffect, useState } from "react";
import { FaLaptopCode, FaReact, FaLayerGroup, FaPaintBrush, FaTools } from "react-icons/fa";
import cls from "./SkillsPage.module.css";
import { Loader } from "../../components/Loader";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../constants/global.constants";

interface ISkill {
  id: number;
  category: string;
  items: string[];
}

const ICON_MAP: Record<number, React.ReactNode> = {
  1: <FaLaptopCode />,
  2: <FaReact />,
  3: <FaLayerGroup />,
  4: <FaPaintBrush />,
  5: <FaTools />,
};

export const SkillsPage: FC = () => {
  const [skills, setSkills] = useState<ISkill[]>([]);

  const [fetchSkills, isLoading, error] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);
    const data = await response.json();
    setSkills(data);
    return data;
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
              <span className={cls.icon}>{ICON_MAP[skill.id]}</span>
              <h3>{skill.category}</h3>
            </div>
            <ul className={cls.list}>
              {skill.items.map((item, idex) => (
                <li key={idex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
