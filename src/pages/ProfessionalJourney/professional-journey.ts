import { TechEnum } from '../../components';
import { IProfessionalJourneyProps, WorkinDayEnum } from './types';

import DefaultCompanyIcon from '../../../public/companies/default-company.svg';
import EurekaLogoIcon from '../../../public/companies/eureka.svg';

export const professionalJourney: IProfessionalJourneyProps[] = [
  {
    image: EurekaLogoIcon,
    jobRole: 'Desenvolvedor Fullstack',
    preview:
      'Tornei-me parte fundamental da equipe ao prestar serviços para uma das maiores transportadoras do país. Meu foco está em implementar soluções inovadoras que agregam valor ao cliente e aprimoram a eficiência dos fluxos internos. Tenho o prazer de colaborar com meus colegas, oferecendo suporte e compartilhando ideias para alcançarmos resultados excepcionais. Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente.Tornei-me parte fundamental da equipe ao prestar serviços para uma das maiores transportadoras do país. Meu foco está em implementar soluções inovadoras que agregam valor ao cliente e aprimoram a eficiência dos fluxos internos. Tenho o prazer de colaborar com meus colegas, oferecendo suporte e compartilhando ideias para alcançarmos resultados excepcionais. Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente.',
    companyName: 'Programing Network',
    skills: ['Metodologias Ágeis', 'Análises Técnicas'],
    startIn: new Date(2023, 0, 1),
    techs: [
      TechEnum.REACT,
      TechEnum.MATERIAL_UI,
      TechEnum.FORMIK,
      TechEnum.TYPESCRIPT,
      TechEnum.NEST,
      TechEnum.NODE,
      TechEnum.JEST,
      TechEnum.POSTGRESQL,
    ],
    workinDay: WorkinDayEnum.FULL_TIME,
    isSameJob: true,
  },
  {
    image: EurekaLogoIcon,
    jobRole: 'Desenvolvedor Fullstack',
    preview:
      'Tornei-me parte fundamental da equipe ao prestar serviços para uma das maiores transportadoras do país. Meu foco está em implementar soluções inovadoras que agregam valor ao cliente e aprimoram a eficiência dos fluxos internos. Tenho o prazer de colaborar com meus colegas, oferecendo suporte e compartilhando ideias para alcançarmos resultados excepcionais. Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente.Tornei-me parte fundamental da equipe ao prestar serviços para uma das maiores transportadoras do país. Meu foco está em implementar soluções inovadoras que agregam valor ao cliente e aprimoram a eficiência dos fluxos internos. Tenho o prazer de colaborar com meus colegas, oferecendo suporte e compartilhando ideias para alcançarmos resultados excepcionais. Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente.',
    companyName: 'Programing Network',
    skills: ['Metodologias Ágeis', 'Análises Técnicas'],
    startIn: new Date(2021, 10, 1),
    endIn: new Date(2023, 0, 1),
    techs: [
      TechEnum.REACT,
      TechEnum.MATERIAL_UI,
      TechEnum.FORMIK,
      TechEnum.TYPESCRIPT,
      TechEnum.NEST,
      TechEnum.NODE,
      TechEnum.JEST,
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
    skills: ['Desenvolvimento de aplicativos', 'Análises Técnicas', 'Conversação com o cliente'],
    startIn: new Date(2021, 4, 1),
    endIn: new Date(2021, 7, 1),
    techs: [TechEnum.REACT_NATIVE, TechEnum.TYPESCRIPT, TechEnum.FIGMA],
    workinDay: WorkinDayEnum.PART_TIME,
  },
];
