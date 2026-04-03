import { type FC, useEffect, useState } from "react";
import { ProjectList } from "../../components/ProjectList";
import cls from "./PortfolioPage.module.css";

export const PortfolioPage: FC = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8801/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Помилка завантаження:", err));
  }, []);

  return (
    <section className={cls.container}>
      <h1 className={cls.pageTitle}>My Portfolio</h1>

      <div className={cls.projectsSection}>
        <ProjectList projects={projects} />
      </div>

      <footer className={cls.footer}>
        <p className={cls.footerText}>Want to see more works?</p>
        <div className={cls.githubWrapper}>
          <a href="https://github.com/AlexandraKurylo" target="_blank" rel="noreferrer" className={cls.githubMainBtn}>
            Visit my GitHub Profile
          </a>
        </div>
      </footer>
    </section>
  );
};
