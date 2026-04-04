import { type FC, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import cls from "./ProjectPage.module.css";
import type { IProject } from "../../types/global.types";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../constants/global.constants";
import { Loader } from "../../components/Loader";

export const ProjectPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<IProject | null>(null);

  const [getProject, isLoading, error] = useFetch(async (path: string) => {
    const response = await fetch(`${API_URL}/${path}`);
    const project = await response.json();
    setProject(project);
  });

  useEffect(() => {
    if (id) {
      getProject(`projects/${id}`);
    }
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className={cls.container}>
        <Link to="/portfolio" className={cls.backLink}>
          ← Back
        </Link>
        <div className={cls.error}>{error}</div>
      </div>
    );
  }

  if (!project) return null;

  const imagePath = new URL(`../../assets/${project.previewUrl}`, import.meta.url).href;

  return (
    <div className={cls.container}>
      <Link to="/portfolio" className={cls.backLink}>
        ← Back to Portfolio
      </Link>

      <article className={cls.content}>
        <h1 className={cls.title}>{project.title}</h1>

        <div className={cls.imageWrapper}>
          <img src={imagePath} alt={project.title} className={cls.mainImage} />
        </div>

        <div className={cls.details}>
          <section>
            <h3 className={cls.subtitle}>About Project</h3>
            <p className={cls.description}>{project.description}</p>
          </section>

          <section>
            <h3 className={cls.subtitle}>Technologies</h3>
            <div className={cls.tags}>
              {project.stack.map((tech) => (
                <span key={tech} className={cls.tag}>
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <div className={cls.actions}>
            <a href={project.liveDemoUrl} target="_blank" rel="noreferrer" className={cls.demoBtn}>
              Live Demo 🚀
            </a>
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className={cls.githubBtn}>
              GitHub Repo
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};
