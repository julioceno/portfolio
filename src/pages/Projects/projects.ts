import { TechEnum } from '../../components';
import { IProjectCardProps } from './types';

import CheryTask1 from '../../../public/projects/cherry-task-1.svg';
import CheryTask2 from '../../../public/projects/cherry-task-2.svg';
import CheryTask3 from '../../../public/projects/cherry-task-3.svg';
import CheryTask4 from '../../../public/projects/cherry-task-4.svg';

import Informaq1 from '../../../public/projects/informaq-1.png';
import Informaq2 from '../../../public/projects/informaq-2.png';
import Informaq3 from '../../../public/projects/informaq-3.png';

import ChessSystem from '../../../public/projects/chess-system-1.png';

import JavaFx1 from '../../../public/projects/javafx-1.png';
import JavaFx2 from '../../../public/projects/javafx-2.png';
import JavaFx3 from '../../../public/projects/javafx-3.png';
import JavaFx4 from '../../../public/projects/javafx-4.png';

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
    id: "0d3e3f78-20c4-4e13-9c25-347019c9e8f7",
    title: "Workshop Java Fx e JDBC",
    images: [JavaFx1,  JavaFx2,  JavaFx3,  JavaFx4],
    preview: "A aplicação desktop tem como objetivo, cuidar do gerenciamento de departamentos e dos vendedores desse departamento.",
    paragraphs: [
      "A aplicação desktop tem como objetivo, cuidar do gerenciamento de departamentos e dos vendedores desse departamento.",
      "Se tiver um departamento de livros, podemos cadastrar vendedores para o mesmo.", 
      "O projeto foi construido com javafx utilizando a arquitetura de projetos MVC."
    ],
    techs: [TechEnum.JAVA, TechEnum.JAVA_FX, TechEnum.JDBC, TechEnum.MYSQL, TechEnum.DOCKER],
    githubLink: "https://github.com/julioceno/workshop-javafx-jdbc"
  },
  {
    id: "64a73a6b-5f63-430a-a541-210ad4ecbf96",
    title: "Workshop SpringBoot Mongo DB",
    images: [],
    preview: "Em suma, a aplicação cuida de postagens de usuários e também possibilita que outros usuários comentem em um post. Simulando uma das funcionalidades de uma rede social.",
    paragraphs: [
      "Em suma, a aplicação cuida de postagens de usuários e também possibilita que outros usuários comentem em um post. Simulando uma das funcionalidades de uma rede social.",
      "Toda a aplicação foi desenvolvida com Java Sprint, utilizando o módulo do sprig para se trabalhar com mongo.",
      "Esse projeto foi desenvolvido em um curso."
    ],
    techs: [TechEnum.JAVA, TechEnum.SPRING_BOOT, TechEnum.MONGODB],
    githubLink: "https://github.com/julioceno/workshop-springboot-mongodb"
  },
 {
    id: "8c8cd595-b031-4bed-9110-61c2b9100b45",
    title: "Workshop SpringBoot JPA",
    images: [],
    preview: "O intuíto do sistema é cuidar dos pedidos de um delivery, desde a criação do pedido até ser feito a conclusão do débito.",
    paragraphs: [
      "O intuíto do sistema é cuidar dos pedidos de um delivery, desde a criação do pedido até ser feito a conclusão do débito.",
      "Esse projeto foi desenvolvido em um curso, explicando todo o fluxo desde de um diagrama UML, até o desenvolvimento do código."
    ],
    techs: [TechEnum.JAVA, TechEnum.SPRING_BOOT,TechEnum.JPA, TechEnum.JDBC, TechEnum.H2_CONSOLE],
    githubLink: "https://github.com/julioceno/workshop-springboot3-jpa"
  },
  {
    id: "8831eaf3-f3dc-49cf-ab70-8d7d0bdb3f7f",
    title: "Jogo de Xadrez",
    images: [ChessSystem],
    preview: "O programa faz com que o jogo tenha as mesmas funcionalidades de um jogo de xadrez comum e de maneira intuitiva. Transmitindo uma boa experiência aos usuários.",
    paragraphs: [
      "O programa faz com que o jogo tenha as mesmas funcionalidades de um jogo de xadrez comum e de maneira intuitiva. Transmitindo uma boa experiência aos usuários.",
      "O jogo foi feito em curso, com o objetivo de treinar conceitos como orientação a objetos e relacionamento de classes."
    ],
    techs: [TechEnum.JAVA],
    githubLink: "https://github.com/julioceno/chess-system-java"
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
