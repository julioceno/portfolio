import { Title, Wrap } from "../../components";
import GithubIcon from "../../../public/github.svg";
import { SocialMediaEnum } from "../../common";

export function Projects() {
  return (
    <Wrap>
      <div className="flex flex-1 justify-end mt-10">
        <div>
          <Title
            image={GithubIcon}
            text="ACESSE O MEU GITHUB PARA TER ACESSO AO CÓDIGO FONTE DE TODOS OS MEUS PROJETOS"
            wordLink="GITHUB"
            link={SocialMediaEnum.GITHUB}
            alt="github"
          />
        </div>
      </div>
    </Wrap>
  );
}
