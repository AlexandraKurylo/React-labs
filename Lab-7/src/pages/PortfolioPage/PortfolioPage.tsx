import { type FC, useEffect, useState } from "react";
import { ProjectList } from "../../components/ProjectList"; // Твій інтерфейс
import cls from "./PortfolioPage.module.css";
import type { IProject } from "../../types/global.types";
import { Loader } from "../../components/Loader";
import { delayFn } from "../../helpers/delayFn";

export const PortfolioPage: FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        await delayFn();
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

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div className={cls.error}>{error}</div>;
  }

  if (projects.length === 0) {
    return (
      <div className={cls.projectsSection}>
        <p className={cls.noData}>No projects found at the moment.</p>
      </div>
    );
  }

  return (
    <section className={cls.container}>
      <h1 className={cls.pageTitle}>My Portfolio</h1>
      <ProjectList projects={projects} />
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
