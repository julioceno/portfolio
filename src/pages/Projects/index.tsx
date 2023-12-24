import GithubIcon from '../../../public/github.svg';
import { SocialMediaEnum } from '../../common';
import { Title, Wrap } from '../../components';
import { ProjectCard } from './components';
import { projects } from './projects';

export function Projects() {
  return (
    <Wrap>
      <div className='flex flex-col flex-1 gap-10 mt-10 md:mx-20 mb-6'>
        <div className='self-end flex justify-end'>
          <Title
            image={GithubIcon}
            text='ACESSE O MEU GITHUB PARA TER ACESSO AO CÓDIGO FONTE DE TODOS OS MEUS PROJETOS'
            wordLink='GITHUB'
            link={SocialMediaEnum.GITHUB}
            alt='github'
          />
        </div>

        <section className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-8'>
          {projects.map((project) => (
            <ProjectCard
              id={project.id}
              title={project.title}
              paragraphs={project.paragraphs}
              preview={project.preview}
              techs={project.techs}
              images={project.images}
              applicationLink={project.applicationLink}
              githubLink={project.githubLink}
              key={project.id}
            />
          ))}
        </section>
      </div>
    </Wrap>
  );
}
