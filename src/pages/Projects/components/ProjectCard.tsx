import { Card, TechBadge } from "../../../components";
import { IProjectCardProps } from "../types";

function ProjectCard({ techs, preview, title }: IProjectCardProps) {
  return (
    <Card>
      <div className="min-h-[10rem] h-full cursor-pointer font-poppins text-main-black dark:text-main-white flex flex-col gap-3 p-2 md:p-4">
        <h3 className="uppercase font-semibold text-lg text-center md:text-start">
          {title}
        </h3>
        <div className="flex flex-wrap gap-1 md:gap-2 justify-center md:justify-start">
          {techs.map((tech) => (
            <TechBadge name={tech} />
          ))}
        </div>
        <p className="uppercase text-sm italic text-center md:text-start">
          {preview}
        </p>
      </div>
    </Card>
  );
}

export { ProjectCard };
