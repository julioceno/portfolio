import { ITech, TechEnum } from './types';

import CssIcon from '../../../public/techs/css.svg';
import GRPCIcon from '../../../public/techs/grpc.svg';
import HtmlIcon from '../../../public/techs/html.svg';
import JavaIcon from '../../../public/techs/java.svg';
import JavascriptIcon from '../../../public/techs/javascript.svg';
import NestIcon from '../../../public/techs/nest.svg';
import NodeIcon from '../../../public/techs/node.svg';
import ReactIcon from '../../../public/techs/react.svg';
import TailwindIcon from '../../../public/techs/tailwind.svg';
import TensorFlowIcon from '../../../public/techs/tensor-flow.svg';
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
    label: 'tRPC',
  },
  {
    name: TechEnum.GRPC,
    icon: GRPCIcon,
    label: 'gRPC',
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
  {
    name: TechEnum.HTML,
    icon: HtmlIcon,
    label: 'HTML',
  },
  {
    name: TechEnum.CSS,
    icon: CssIcon,
    label: 'CSS',
  },
  {
    name: TechEnum.TENSORFLOW,
    icon: TensorFlowIcon,
    label: 'TensorFlow',
  },
  {
    name: TechEnum.TAILWIND,
    icon: TailwindIcon,
    label: 'Tailwind CSS',
  },
];
