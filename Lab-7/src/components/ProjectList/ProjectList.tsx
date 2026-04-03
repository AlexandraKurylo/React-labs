import type { FC } from "react";
import { ProjectCard } from "../ProjectCard";
import cls from "./ProjectList.module.css";

interface Project {
  id: string;
  title: string;
  previewUrl: string;
  stack: string[];
}

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList: FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className={cls.grid}>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};
