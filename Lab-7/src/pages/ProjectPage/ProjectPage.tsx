import { type FC, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import cls from "./ProjectPage.module.css";
import type { IProject } from "../../types/global.types";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../constants/global.constants";
import { Loader } from "../../components/Loader";
import { ProjectDetails } from "../../components/ProjectDetails";

export const ProjectPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<IProject | null>(null);

  const [getProject, isLoading, error] = useFetch(async (url: string) => {
    const response = await fetch(`${API_URL}/${url}`);
    if (!response.ok) throw new Error("Project not found");
    const project = await response.json();
    setProject(project);
    return project;
  });

  useEffect(() => {
    if (id) {
      getProject(`projects/${id}`);
    }
  }, []);

  if (isLoading) return <Loader />;

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

  return (
    <div className={cls.container}>
      <Link to="/portfolio" className={cls.backLink}>
        ← Back to Portfolio
      </Link>
      <ProjectDetails project={project} />
    </div>
  );
};
