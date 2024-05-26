import { TechEnum } from '../../components';
import { ICourseCardProps } from './types';

import CourseErickWendelPhoto from '../../../public/courses/erick-wendel.svg';
import JavaPhoto from '../../../public/courses/java.svg';
import JavascriptFullstack from '../../../public/courses/javascript-fullstack.svg';
import JavascriptPhoto from '../../../public/courses/javascript.svg';
import TailwindPhoto from '../../../public/courses/tailwind.svg';

import JavaCertificate from '../../../public/certificate/java-course.pdf';
import TailwindCertificate from '../../../public/certificate/tailwind-course.pdf';
import WeekJsExpertCertificate from '../../../public/certificate/week-js-expert-07.pdf';


export const courses: ICourseCardProps[] = [
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
       TechEnum.H2_CONSOLE,
       TechEnum.UML
      ],
    certificate: JavaCertificate,
  },
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
