import { type FC, useEffect, useState } from "react";
import { ProjectList } from "../../components/ProjectList"; // Твій інтерфейс
import cls from "./PortfolioPage.module.css";
import type { IProject } from "../../types/global.types";

export const PortfolioPage: FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch("http://localhost:8801/projects");

        if (!response.ok) {
          throw new Error("Failed to load projects. Please try again later.");
        }

        const data = await response.json();
        setProjects(data);
      } catch (err: any) {
        setError(err.message || "An unexpected error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className={cls.container}>
      <h1 className={cls.pageTitle}>My Portfolio</h1>

      {isLoading ? (
        <div className={cls.loader}>Loading projects...</div>
      ) : error ? (
        <div className={cls.error}>{error}</div>
      ) : (
        <div className={cls.projectsSection}>
          {projects.length > 0 ? (
            <ProjectList projects={projects} />
          ) : (
            <p className={cls.noData}>No projects found at the moment.</p>
          )}
        </div>
      )}

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
