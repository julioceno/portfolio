import { TechEnum } from '../../components';
import { IProjectCardProps } from './types';

import CheryTask1 from '../../../public/projects/cherry-task-1.svg';
import CheryTask2 from '../../../public/projects/cherry-task-2.svg';
import CheryTask3 from '../../../public/projects/cherry-task-3.svg';
import CheryTask4 from '../../../public/projects/cherry-task-4.svg';

export const projects: IProjectCardProps[] = [
  {
    id: '3aaeec4b-2f4e-4c89-b994-37e24dbdabb4',
    title: 'Cherry Task',
    preview:
      'Uma aplicação que te ajuda a organizar suas tarefas do dia a dia, permitindo que voce torne sua vida muito mais organizada, facilitando também na escrita dos passos para cada tarefa, pois toda alteração feita no conjunto de atividades é salvo automaticamente, aumentando a produtividade e diminuindo a possibilidade de falhas.',
    techs: [
      TechEnum.REACT,
      TechEnum.NODE,
      TechEnum.TRPC,
      TechEnum.PRISMA,
      TechEnum.POSTGRESQL,
      TechEnum.MONOREPO,
    ],
    paragraphs: [
      'Uma aplicação que te ajuda a organizar suas tarefas do dia a dia, permitindo que voce torne sua vida muito mais organizada, facilitando também na escrita dos passos para cada tarefa, pois toda alteração feita no conjunto de atividades é salvo automaticamente, aumentando a produtividade e diminuindo a possibilidade de falhas.',
      'A mesma foi desenvolvida com foco de praticar o uso do tRPC, e tirar o melhor que essa ferramenta nos proporciona. Na parte de armazemanamento de dados utilizei o prisma juntamente com postgres para garantir o registro de dados.',
    ],
    images: [CheryTask3, CheryTask2, CheryTask4, CheryTask1],
    githubLink: 'https://github.com/julioceno/cherry-task',
  },
  {
    id: '9e4970a7-df39-447a-9035-627e0486725b',
    title: 'Cherry Task',
    preview:
      'Uma aplicação que te ajuda a organizar suas tarefas do dia a dia, permitindo que voce torne sua vida muito mais organizada, facilitando também na escrita dos passos para cada tarefa, pois toda alteração feita no conjunto de atividades é salvo automaticamente, aumentando a produtividade e diminuindo a possibilidade de falhas.',
    techs: [TechEnum.REACT, TechEnum.NODE, TechEnum.TRPC, TechEnum.MONOREPO],
    paragraphs: [
      'Uma aplicação que te ajuda a organizar suas tarefas do dia a dia, permitindo que voce torne sua vida muito mais organizada, facilitando também na escrita dos passos para cada tarefa, pois toda alteração feita no conjunto de atividades é salvo automaticamente, aumentando a produtividade e diminuindo a possibilidade de falhas.',
      'Uma aplicação que te ajuda a organizar suas tarefas do dia a dia, permitindo que voce torne sua vida muito mais organizada, facilitando também na escrita dos passos para cada tarefa, pois toda alteração feita no conjunto de atividades é salvo automaticamente, aumentando a produtividade e diminuindo a possibilidade de falhas.',
    ],
    images: [],
    githubLink: 'https://github.com/julioceno/cherry-task',
  },
  {
    id: 'fb8ff41d-2cee-4389-a59b-7b92b0f744c6',
    title: 'Cherry Task',
    preview:
      'Uma aplicação que te ajuda a organizar suas tarefas do dia a dia, permitindo que voce torne sua vida muito mais organizada, facilitando também na escrita dos passos para cada tarefa, pois toda alteração feita no conjunto de atividades é salvo automaticamente, aumentando a produtividade e diminuindo a possibilidade de falhas.',
    techs: [TechEnum.REACT, TechEnum.NODE, TechEnum.TRPC, TechEnum.MONOREPO],
    paragraphs: [
      'Uma aplicação que te ajuda a organizar suas tarefas do dia a dia, permitindo que voce torne sua vida muito mais organizada, facilitando também na escrita dos passos para cada tarefa, pois toda alteração feita no conjunto de atividades é salvo automaticamente, aumentando a produtividade e diminuindo a possibilidade de falhas.',
      'Uma aplicação que te ajuda a organizar suas tarefas do dia a dia, permitindo que voce torne sua vida muito mais organizada, facilitando também na escrita dos passos para cada tarefa, pois toda alteração feita no conjunto de atividades é salvo automaticamente, aumentando a produtividade e diminuindo a possibilidade de falhas.',
    ],
    images: [],
    applicationLink: 'https://github.com/julioceno/cherry-task',
  },
  {
    id: '4d950e84-cd8f-4c7f-8f67-0bf0b2724722',
    title: 'Cherry Task',
    preview:
      'Uma aplicação que te ajuda a organizar suas tarefas do dia a dia, permitindo que voce torne sua vida muito mais organizada, facilitando também na escrita dos passos para cada tarefa, pois toda alteração feita no conjunto de atividades é salvo automaticamente, aumentando a produtividade e diminuindo a possibilidade de falhas.',
    techs: [TechEnum.REACT, TechEnum.NODE, TechEnum.TRPC, TechEnum.MONOREPO],
    paragraphs: [
      'Uma aplicação que te ajuda a organizar suas tarefas do dia a dia, permitindo que voce torne sua vida muito mais organizada, facilitando também na escrita dos passos para cada tarefa, pois toda alteração feita no conjunto de atividades é salvo automaticamente, aumentando a produtividade e diminuindo a possibilidade de falhas.',
      'Uma aplicação que te ajuda a organizar suas tarefas do dia a dia, permitindo que voce torne sua vida muito mais organizada, facilitando também na escrita dos passos para cada tarefa, pois toda alteração feita no conjunto de atividades é salvo automaticamente, aumentando a produtividade e diminuindo a possibilidade de falhas.',
    ],
    images: [],
  },
];
