import { TechEnum } from '../../components';
import { ICourseCardProps } from './types';

import JavascriptPhoto from '../../../public/courses/javascript.svg';
import UdemyPhoto from '../../../public/courses/udemy.svg';

export const courses: ICourseCardProps[] = [
  {
    image: UdemyPhoto,
    preview: 'aa',
    techs: [TechEnum.JAVASCRIPT],
    title: 'AAA',
  },
  {
    image: JavascriptPhoto,
    preview:
      'Aprendi os fundamentos do javascript e aprendi uma boa parte de lógica de programação, terminei esse curso com uma base sólida dos fundamentos.',
    techs: [TechEnum.JAVASCRIPT],
    title: 'Javascript Gustavo Guanabara',
  },
];
