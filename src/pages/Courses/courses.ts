import { TechEnum } from '../../components';
import { ICourseCardProps } from './types';

import CourseErickWendelPhoto from '../../../public/courses/erick-wendel.svg';
import GoLangCoursePhoto from '../../../public/courses/go-lang.svg';
import JavaPhoto from '../../../public/courses/java.svg';
import JavascriptFullstack from '../../../public/courses/javascript-fullstack.svg';
import JavascriptPhoto from '../../../public/courses/javascript.svg';
import NlwJourneyPhoto from '../../../public/courses/nlw-journey.svg';
import TailwindPhoto from '../../../public/courses/tailwind.svg';
import UnicesumarPhoto from '../../../public/courses/unicesumar.svg';

import GoLangCourseCertificate from '../../../public/certificate/go-lang.pdf';
import JavaCertificate from '../../../public/certificate/java-course.pdf';
import NlwJourneyDevops from '../../../public/certificate/nlw-journey-devops.pdf';
import NlwJourneyReactNative from '../../../public/certificate/nlw-journey-react-native.pdf';
import TailwindCertificate from '../../../public/certificate/tailwind-course.pdf';
import WeekJsExpertCertificate from '../../../public/certificate/week-js-expert-07.pdf';


export const courses: ICourseCardProps[] = [
  {
    image: UnicesumarPhoto,
    title: 'Bacharelado em Engenharia de Software - UniCesumar',
    preview:"Desenvolvendo uma base sólida em Engenharia de Software através de estudos teóricos e práticos. Explorando desde algoritmos e estruturas de dados até metodologias ágeis. Além disso, consolidando conhecimento em diferentes paradigmas de programação e criando exemplos através de diagramas UML e outras técnicas de modelagem.",
    techs: [
      TechEnum.UML
    ]
  },
  {
    image: JavaPhoto,
    title: 'Java COMPLETO Programação Orientada a Objetos + Projetos',
    preview:"Fortalecendo conceitos de Java e colocando a mão na massa através de projetos reais. Criando desde WEB API's até aplicações desktop. Alem de tudo, solidificando conhecimento em diferentes tipos de banco de dados e criando exemplos através de diagramas UML.",
    techs: [
      TechEnum.JAVA,
       TechEnum.SPRING_BOOT,
       TechEnum.JDBC,
       TechEnum.JPA,
       TechEnum.JAVA_FX,
       TechEnum.SCENE_BUILDER,
       TechEnum.POSTGRESQL,
       TechEnum.MYSQL,
       TechEnum.MONGODB,
       /*TechEnum.H2_CONSOLE,
       TechEnum.UML*/
      ],
    certificate: JavaCertificate,
  },
  {
    image: GoLangCoursePhoto,
    title: "Go (Golang): Explorando a Linguagem do Google",
    preview: 'Neste curso, aprofundei meus conhecimentos sobre Go, Explorando os motivos de sua criação e aprendendo técnicas avançadas para lidar com concorrência na linguagem.',
    techs: [
      TechEnum.GO
    ],
    certificate: GoLangCourseCertificate
  },
  {
    image: NlwJourneyPhoto, 
    title: 'NLW Journey - Devops',
    preview:"Subindo uma aplicação em container docker dentro de um kubernetes para a AWS no serviço EC2. Criando manifestos para controlar determinadas politicas no processo de deploy.",
    techs: [
      TechEnum.DOCKER,
      TechEnum.AWS,
      TechEnum.AWS_EKS,
      TechEnum.KUBERNETES,
      TechEnum.TERRAFORM,
    ],
    certificate: NlwJourneyDevops,
  },
  {
    image: NlwJourneyPhoto, 
    title: 'NLW Journey - Devops',
    preview:"Subindo uma aplicação em container docker dentro de um kubernetes para a AWS no serviço EC2. Criando manifestos para controlar determinadas politicas no processo de deploy.",
    techs: [
      TechEnum.DOCKER,
      TechEnum.AWS,
      TechEnum.AWS_EKS,
      TechEnum.KUBERNETES,
      TechEnum.TERRAFORM,
    ],
    certificate: NlwJourneyDevops,
  },
  {
    image: NlwJourneyPhoto, 
    title: 'NLW Journey - React Native',
    preview:"Criando uma aplicação para organizar uma viagem em grupo. Utilizando react native utilizando expo para fazer a criação do projeto. Manipulando biblioteca de datas e usando tailwind para a estilização do projeto",
    techs: [
      TechEnum.REACT_NATIVE,
      TechEnum.TYPESCRIPT,
      TechEnum.TAILWIND,
    ],
    certificate: NlwJourneyReactNative,
  },
  /*{
    image: NlwJourneyPhoto,
    title: 'NLW Journey - Java',
    preview:"Criando uma aplicação para organizar uma viagem em grupo. Treinando conceitos de Java Spring utilziando flyway para controle de migrations e persistindo os dados em um banco de dados através do JPA.",
    techs: [
      TechEnum.JAVA,
      TechEnum.SPRING_BOOT,
      TechEnum.JPA,
      TechEnum.H2_CONSOLE,
      TechEnum.FLYWAY
    ],
    certificate: NlwJourneyJava,
  }, */
  {
    image: TailwindPhoto,
    title: 'Tailwind CSS do zero ao avançado + Projetos',
    preview:
      'Este curso me ajudou a aprofundar os meus conhecimentos em tailwind, através de projetos reais consegui colocar esses conhecimentos em praticas dentro do curso.',
    techs: [TechEnum.HTML, TechEnum.TAILWIND],
    certificate: TailwindCertificate,
  },
  {
    title: 'Semana JS Expert 7.0',
    image: CourseErickWendelPhoto,
    preview:
      'Aprendi a utilizar os Web Workers do javascript numa aplicação real. Na mesma utilizamos os web workers para obter os gestos do usuario e através do TensorFlow entender qual gesto estava sendo feito e aplicar eventos interativos na aplicação.',
    techs: [TechEnum.JAVASCRIPT, TechEnum.TENSORFLOW],
    certificate: WeekJsExpertCertificate,
  },
  {
    title: 'Curso Web Moderno Completo com JavaScript + Projetos',
    image: JavascriptFullstack,
    preview:
      'Neste curso fortaleci minha base em programação, criando projetos reais pensados no mercado de trabalho. O curso abordou tanto assunto de frontend quanto de backend.',
    techs: [TechEnum.HTML, TechEnum.CSS, TechEnum.JAVASCRIPT, TechEnum.NODE],
  },
  {
    title: 'Javascript Gustavo Guanabara',
    image: JavascriptPhoto,
    preview:
      'Aprendi os fundamentos do javascript e aprendi uma boa parte de lógica de programação, terminei esse curso com uma base sólida dos fundamentos.',
    techs: [TechEnum.JAVASCRIPT, TechEnum.HTML, TechEnum.CSS],
  },
];
