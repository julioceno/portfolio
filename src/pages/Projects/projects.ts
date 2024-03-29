import { TechEnum } from '../../components';
import { IProjectCardProps } from './types';

import CheryTask1 from '../../../public/projects/cherry-task-1.svg';
import CheryTask2 from '../../../public/projects/cherry-task-2.svg';
import CheryTask3 from '../../../public/projects/cherry-task-3.svg';
import CheryTask4 from '../../../public/projects/cherry-task-4.svg';

import Informaq1 from '../../../public/projects/informaq-1.png';
import Informaq2 from '../../../public/projects/informaq-2.png';
import Informaq3 from '../../../public/projects/informaq-3.png';

export const projects: IProjectCardProps[] = [
  {
    id: '062e29c4-832d-4609-a9f8-0c328fbdf7b4',
    title: 'Informaq',
    images: [Informaq1, Informaq2, Informaq3],
    preview:
      'Um site desenvolvido para a assistência técnica da informaq com o intuito de mostrar os seus serviços e disponibilizar o meio de contato. Com um layout limpo, apresenta as informações de forma didática.',
    paragraphs: [
      'Um site desenvolvido para a assistência técnica da informaq com o intuito de mostrar os seus serviços e disponibilizar o meio de contato. Com um layout limpo, apresenta as informações de forma didática.',
      'O processo de construção do site começou desde sua prototipação, após validado com o cliente sobre o layout, começou assim o desenvolvido com react e utilizando tailwind para a estilização. Também, utilizei o framer motion para me auxiliar a fazer animações bonitas e suaves.',
    ],
    techs: [TechEnum.REACT, TechEnum.TAILWIND, TechEnum.FRAMER_MOTION],
    applicationLink: 'https://informaq.vercel.app/',
    githubLink: 'https://github.com/julioceno/informaq/',
  },
  {
    id: '227779a2-7409-4406-99e5-e11a4cceaf1d',
    title: 'Todo List Java',
    preview:
      'Uma API desenvolvida em Java com Spring Boot para proporcionar uma experência eficiente e organizada para gerenciamento de tarefas. Com funcionalidades de gerenciamento e consulta das tarefas.',
    techs: [TechEnum.JAVA, TechEnum.SPRING_BOOT],
    paragraphs: [
      'Uma API desenvolvida em Java com Spring Boot para proporcionar uma experência eficiente e organizada para gerenciamento de tarefas. Com funcionalidades de gerenciamento e consulta das tarefas.',
      'A API fornece uma arquitetura sólida e de fácil entendimento. A aplicação em questão foi desenvolvida durante um bootcamp em que participei para colocar em prática conhecimentos de Java.',
      'Por se tratar apenas de uma API, não tem imagens para serem apresentadas,',
    ],
    images: [],
    githubLink: 'https://github.com/julioceno/todolist-java',
  },
  {
    id: 'c01be456-bb9d-41e8-84b2-73b0b5d05e9e',
    title: 'Drive More',
    preview:
      'Centralizando toda regra de negócio de uma autoescola, essa aplicação cuida da gestão das aulas dos alunos. Uma aplicação focada em agilizar o processo da autoecola visando sempre deixar registrado qualquer alteração feita dentro de um histórico de auditoria para fins de observabilidade.',
    techs: [TechEnum.NODE, TechEnum.NEST, TechEnum.GRPC, TechEnum.PRISMA, TechEnum.POSTGRESQL],
    paragraphs: [
      'Centralizando toda regra de negócio de uma autoescola, essa aplicação cuida da gestão das aulas dos alunos. Uma aplicação focada em agilizar o processo da autoecola visando sempre deixar registrado qualquer alteração feita dentro de um histórico de auditoria para fins de observabilidade.',
      'Para facilitar não só a vida da autoescola mas também do aluno, é possível gerar um pdf com todas as aulas marcadas pendentes. Isso foi implementado com o uso de worker threads, um módulo nativo do node js para lidar com programação paralela.',
      'A aplicação se trata apenas da API que cuida de toda regra de negócio já citada antes. Utilizei uma arquitetura de microsserviços visando melhorar a perfomance da aplicação através de escalabilidade em ambiente de produção.',
      'Por se tratar apenas de uma API, não tem imagens para serem apresentadas,',
    ],
    images: [],
    githubLink: 'https://github.com/julioceno/drive-more',
  },
  {
    id: '3aaeec4b-2f4e-4c89-b994-37e24dbdabb4',
    title: 'Cherry Task',
    preview:
      'Uma aplicação que te ajuda a organizar suas tarefas do dia a dia, permitindo que voce torne sua vida muito mais organizada, facilitando também na escrita dos passos para cada tarefa, pois toda alteração feita no conjunto de atividades é salvo automaticamente, aumentando a produtividade e diminuindo a possibilidade de falhas.',
    techs: [
      TechEnum.REACT,
      TechEnum.MATERIAL_UI,
      TechEnum.NODE,
      TechEnum.TRPC,
      TechEnum.PRISMA,
      TechEnum.POSTGRESQL,
      TechEnum.MONOREPO,
    ],
    paragraphs: [
      'Uma aplicação que te ajuda a organizar suas tarefas do dia a dia, permitindo que voce torne sua vida muito mais organizada, facilitando também na escrita dos passos para cada tarefa, pois toda alteração feita no conjunto de atividades é salvo automaticamente, aumentando a produtividade e diminuindo a possibilidade de falhas.',
      'A mesma foi desenvolvida com foco de praticar o uso do tRPC, e tirar o melhor que essa ferramenta nos proporciona. Na parte de armazemanamento de dados utilizei o prisma juntamente com postgres para garantir o registro de dados. Além disso utilizei o Monorepo da Vercel para orquestrar a inicialização da aplicação que foi divida em frontend e backend.',
    ],
    images: [CheryTask3, CheryTask2, CheryTask4, CheryTask1],
    githubLink: 'https://github.com/julioceno/cherry-task',
  },
];
