import { Title, Wrap } from "../../components";
import GithubIcon from "../../../public/github.svg";
import { SocialMediaEnum } from "../../common";
import { ProjectCard } from "./components";

export function Projects() {
  return (
    <Wrap>
      <div className="flex flex-col flex-1 gap-10 mt-10 pb-10">
        <div className="self-end">
          <Title
            image={GithubIcon}
            text="ACESSE O MEU GITHUB PARA TER ACESSO AO CÓDIGO FONTE DE TODOS OS MEUS PROJETOS"
            wordLink="GITHUB"
            link={SocialMediaEnum.GITHUB}
            alt="github"
          />
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-8">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </section>
      </div>
    </Wrap>
  );
}
