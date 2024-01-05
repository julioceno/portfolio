import { TechEnum } from '../../components';
import { IProfessionalJourneyProps, WorkinDayEnum } from './types';

import DefaultCompanyIcon from '../../../public/companies/default-company.svg';
import EurekaLogoIcon from '../../../public/companies/eureka.svg';

export const professionalJourney: IProfessionalJourneyProps[] = [
  {
    image: EurekaLogoIcon,
    jobRole: 'Desenvolvedor Fullstack',
    preview:
      'Tenho a honra de contribuir de maneira significativa com minhas equipes, agora atuando em tempo integral. Tive o prazer de continuar atuando para uma das maiores empresas de agenciamento de cargas do país. Mas levando meus conhecimentos para outros projetos, minha dedicação me proporcionou uma visão mais abrangente dentro da empresa. Atuando em projetos em seguradora renomada na América latina, atuando em sistemas internos para melhorar o fluxo de trabalho e tendo uma participação em sistemas bancários.',
    companyName: 'Programing Network',
    skills: [
      'Mentoria',
      'Adaptabilidade entre Projetos',
      'Resolução de Problemas',
      'Metodologias Ágeis',
      'Pensamento Crítico',
      'Análises Técnicas',
      'Autoconhecimento',
      'Autoconfiança',
    ],
    startIn: new Date(2023, 0, 1),
    techs: [
      TechEnum.REACT,
      TechEnum.MATERIAL_UI,
      TechEnum.FORMIK,
      TechEnum.REACT_FINAL_FORM,
      TechEnum.MOBX,
      TechEnum.TYPESCRIPT,
      TechEnum.NODE,
      TechEnum.NEST,
      TechEnum.GRPC,
      TechEnum.LOOPBACK,
      TechEnum.FEATHERS,
      TechEnum.JEST,
      TechEnum.PRISMA,
      TechEnum.POSTGRESQL,
      TechEnum.DENO,
    ],
    workinDay: WorkinDayEnum.FULL_TIME,
    isSameJob: true,
  },
  {
    image: EurekaLogoIcon,
    jobRole: 'Desenvolvedor Fullstack',
    preview:
      'Tornei-me parte fundamental da equipe ao prestar serviços para uma das maiores transportadoras do país. Meu foco está em implementar soluções inovadoras que agregam valor ao cliente e aprimoram a eficiência dos fluxos internos. Tenho o prazer de colaborar com meus colegas, oferecendo suporte e compartilhando ideias para alcançarmos resultados excepcionais. Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente.',
    companyName: 'Programing Network',
    skills: [
      'Proatividade na Aprendizagem',
      'Resolução de Problemas',
      'Habilidade de Pesquisa',
      'Metodologias Ágeis',
      'Análises Técnicas',
    ],
    startIn: new Date(2021, 8, 1),
    endIn: new Date(2023, 0, 1),
    techs: [
      TechEnum.REACT,
      TechEnum.MATERIAL_UI,
      TechEnum.FORMIK,
      TechEnum.MOBX,

      TechEnum.TYPESCRIPT,
      TechEnum.NEST,
      TechEnum.NODE,
      TechEnum.JEST,
      TechEnum.PRISMA,
      TechEnum.POSTGRESQL,
    ],
    workinDay: WorkinDayEnum.PART_TIME,
  },
  {
    image: DefaultCompanyIcon,
    jobRole: 'Desenvolvedor Mobile',
    preview:
      'Atuei na Programming Network trazendo soluções digitais através de aplicativos desde sua prototipação até a criação das linhas de código. Atuando também em analises técnicas, criação de propostas e atuando na conversação com o cliente.',
    companyName: 'Programing Network',
    skills: ['Resiliência', 'Conversação com o cliente', 'Análises Técnicas'],
    startIn: new Date(2021, 4, 1),
    endIn: new Date(2021, 7, 1),
    techs: [TechEnum.REACT_NATIVE, TechEnum.TYPESCRIPT, TechEnum.FIGMA],
    workinDay: WorkinDayEnum.PART_TIME,
  },
];
