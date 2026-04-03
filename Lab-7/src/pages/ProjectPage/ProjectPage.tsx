import { type FC, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import cls from "./ProjectPage.module.css";

export const ProjectPage: FC = () => {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    fetch(`http://localhost:8801/projects/${id}`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, [id]);

  if (!project) return <div className={cls.loader}>Loading project details...</div>;

  const imagePath = new URL(`../../assets/${project.previewUrl}`, import.meta.url).href;

  return (
    <div className={cls.container}>
      <Link to="/portfolio" className={cls.backLink}>
        ← Back to Portfolio
      </Link>

      <article className={cls.content}>
        <h1 className={cls.title}>{project.title}</h1>
        <img src={imagePath} alt={project.title} className={cls.mainImage} />

        <div className={cls.details}>
          <h3>Project Description</h3>
          <p>{project.description}</p>

          <h3>Tech Stack</h3>
          <div className={cls.tags}>
            {project.stack.map((s: string) => (
              <span key={s} className={cls.tag}>
                {s}
              </span>
            ))}
          </div>

          <div className={cls.actions}>
            <a href={project.liveDemoUrl} target="_blank" rel="noreferrer" className={cls.demoBtn}>
              Live Demo 🚀
            </a>
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className={cls.githubBtn}>
              GitHub Repository
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};
