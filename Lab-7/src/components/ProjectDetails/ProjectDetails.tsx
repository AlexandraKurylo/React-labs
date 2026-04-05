import { type FC } from "react";
import type { IProject } from "../../types/global.types";
import cls from "./ProjectDetails.module.css";

interface ProjectDetailsProps {
  project: IProject;
}

export const ProjectDetails: FC<ProjectDetailsProps> = ({ project }) => {
  const imagePath = new URL(`../../assets/${project.previewUrl}`, import.meta.url).href;

  return (
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
  );
};
