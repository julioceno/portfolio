import { ITech, TechEnum } from './types';

import JavaIcon from '../../../public/techs/java.svg';
import JavascriptIcon from '../../../public/techs/javascript.svg';
import NestIcon from '../../../public/techs/nest.svg';
import NodeIcon from '../../../public/techs/node.svg';
import ReactIcon from '../../../public/techs/react.svg';
import TRPCIcon from '../../../public/techs/trpc.svg';
import TypescriptIcon from '../../../public/techs/typescript.svg';
import VercelIcon from '../../../public/techs/vercel.svg';

export const techsArray: ITech[] = [
  {
    name: TechEnum.NODE,
    icon: NodeIcon,
    label: 'Node JS',
  },
  {
    name: TechEnum.REACT,
    icon: ReactIcon,
    label: 'React JS',
  },
  {
    name: TechEnum.MONOREPO,
    icon: VercelIcon,
    label: 'Monorepo',
  },
  {
    name: TechEnum.TRPC,
    icon: TRPCIcon,
    label: 'TRPC',
  },
  {
    name: TechEnum.JAVA,
    icon: JavaIcon,
    label: 'Java',
  },
  {
    name: TechEnum.JAVASCRIPT,
    icon: JavascriptIcon,
    label: 'Javascript',
  },
  {
    name: TechEnum.TYPESCRIPT,
    icon: TypescriptIcon,
    label: 'Typescript',
  },
  {
    name: TechEnum.NEST,
    icon: NestIcon,
    label: 'Nest JS',
  },
];
