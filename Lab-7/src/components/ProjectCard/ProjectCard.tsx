import type { FC } from "react";
import { ButtonLink } from "../ButtonLink";
import cls from "./ProjectCard.module.css";

interface ProjectCardProps {
  id: string;
  title: string;
  previewUrl: string;
  stack: string[];
}

export const ProjectCard: FC<ProjectCardProps> = ({ id, title, previewUrl, stack }) => {
  const imagePath = new URL(`../../assets/${previewUrl}`, import.meta.url).href;

  return (
    <article className={cls.card}>
      <picture className={cls.imageWrapper}>
        <img src={imagePath} alt={title} className={cls.image} />
      </picture>
      <hr />
      <div className={cls.content}>
        <h3 className={cls.title}>{title}</h3>
        <div className={cls.stack}>
          {stack.map((s) => (
            <span key={s} className={cls.tag}>
              {s}
            </span>
          ))}
        </div>
        <ButtonLink to={`/portfolio/${id}`}>View more</ButtonLink>
      </div>
    </article>
  );
};
