import { useParams } from "react-router-dom";
import { TechBadge, Wrap } from "../../components";
import { useFindProject } from "./hooks";

export function Project() {
  const { id } = useParams();
  const project = useFindProject(id)!;

  return (
    <Wrap>
      <div className="flex flex-col items-center flex-1 font-poppins text-main-black dark:text-main-white pb-10 2xl:px-60 ">
        <h1 className="font-bold text-xl md:text-3xl mt-10">{project.title}</h1>

        <div className="flex flex-wrap gap-2 md:gap-2 justify-center md:justify-start mt-5">
          {project.techs.map((tech) => (
            <TechBadge name={tech} hasShadow />
          ))}
        </div>

        <div className="flex flex-col gap-2 mt-10">
          {project.paragraphs.map((paragraph) => {
            return <p className="text-center italic text-base">{paragraph}</p>;
          })}
        </div>
      </div>
    </Wrap>
  );
}
