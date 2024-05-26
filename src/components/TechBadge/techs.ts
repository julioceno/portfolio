import { ITech, TechEnum } from './types';

import AWSIcon from '../../../public/techs/aws.svg';
import CssIcon from '../../../public/techs/css.svg';
import DenoIcon from '../../../public/techs/deno.svg';
import DockerIcon from '../../../public/techs/docker.svg';
import ExpressIcon from '../../../public/techs/express.svg';
import FeathersIcon from '../../../public/techs/feathers.svg';
import FigmaIcon from '../../../public/techs/figma.svg';
import FormikIcon from '../../../public/techs/formik.svg';
import FramerMotionIcon from '../../../public/techs/framer-motion.svg';
import GRPCIcon from '../../../public/techs/grpc.svg';
import h2ConsoleIcon from '../../../public/techs/h2-console.svg';
import HtmlIcon from '../../../public/techs/html.svg';
import JavaFX from '../../../public/techs/java-fx.svg';
import JavaIcon from '../../../public/techs/java.svg';
import JavascriptIcon from '../../../public/techs/javascript.svg';
import JDBCIcon from '../../../public/techs/jdbc.svg';
import JestIcon from '../../../public/techs/jest.svg';
import JPAIcon from '../../../public/techs/jpa.svg';
import LoopbackIcon from '../../../public/techs/loopback.svg';
import MaterialUiIcon from '../../../public/techs/material-ui.svg';
import MobxlIcon from '../../../public/techs/mobx.svg';
import mongoIcon from '../../../public/techs/mongo.svg';
import MysqlIcon from '../../../public/techs/mysql.svg';
import NestIcon from '../../../public/techs/nest.svg';
import NodeIcon from '../../../public/techs/node.svg';
import PostgresqlIcon from '../../../public/techs/postgresql.svg';
import PrismaIcon from '../../../public/techs/prisma.svg';
import ReactFinalFormIcon from '../../../public/techs/react-final-form.svg';
import ReactIcon from '../../../public/techs/react.svg';
import RedisIcon from '../../../public/techs/redis.svg';
import SceneBuilderIcon from '../../../public/techs/scene-builder.svg';
import SpringBootIcon from '../../../public/techs/spring-boot.svg';
import TailwindIcon from '../../../public/techs/tailwind.svg';
import TensorFlowIcon from '../../../public/techs/tensor-flow.svg';
import TRPCIcon from '../../../public/techs/trpc.svg';
import TypescriptIcon from '../../../public/techs/typescript.svg';
import UMLIcon from '../../../public/techs/uml.svg';
import VercelIcon from '../../../public/techs/vercel.svg';
import ZodIcon from '../../../public/techs/zod.svg';

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
    name: TechEnum.REACT_NATIVE,
    icon: ReactIcon,
    label: 'React Native',
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
  {
    name: TechEnum.FIGMA,
    icon: FigmaIcon,
    label: 'Figma',
  },
  {
    name: TechEnum.JEST,
    icon: JestIcon,
    label: 'Jest',
  },
  {
    name: TechEnum.POSTGRESQL,
    icon: PostgresqlIcon,
    label: 'Postgresql',
  },
  {
    name: TechEnum.MATERIAL_UI,
    icon: MaterialUiIcon,
    label: 'Material UI',
  },
  {
    name: TechEnum.FORMIK,
    icon: FormikIcon,
    label: 'Formik',
  },
  {
    name: TechEnum.PRISMA,
    icon: PrismaIcon,
    label: 'Prisma',
  },
  {
    name: TechEnum.DENO,
    icon: DenoIcon,
    label: 'Deno',
  },
  {
    name: TechEnum.EXPRESS,
    icon: ExpressIcon,
    label: 'Express',
  },
  {
    name: TechEnum.MOBX,
    icon: MobxlIcon,
    label: 'Mobx',
  },
  {
    name: TechEnum.FEATHERS,
    icon: FeathersIcon,
    label: 'Feathers',
  },
  {
    name: TechEnum.LOOPBACK,
    icon: LoopbackIcon,
    label: 'Loopback',
  },
  {
    name: TechEnum.REACT_FINAL_FORM,
    icon: ReactFinalFormIcon,
    label: 'React Final Form',
  },
  {
    name: TechEnum.ZOD,
    icon: ZodIcon,
    label: 'Zod',
  },
  {
    name: TechEnum.SPRING_BOOT,
    icon: SpringBootIcon,
    label: 'Spring Boot',
  },
  {
    name: TechEnum.FRAMER_MOTION,
    icon: FramerMotionIcon,
    label: 'Framer Motion',
  },
  {
    name: TechEnum.MONGODB,
    icon: mongoIcon,
    label: 'Mongo DB',
  },
  {
    name: TechEnum.H2_CONSOLE,
    icon: h2ConsoleIcon,
    label: 'H2 Console',
  },
  {
    name: TechEnum.JAVA_FX,
    icon: JavaFX,
    label: "Java FX"
  },
  {
    name: TechEnum.JPA,
    icon: JPAIcon,
    label: "JPA"
  },
  {
    name: TechEnum.JDBC,
    icon: JDBCIcon,
    label: "JDBC"
  },
  {
    name: TechEnum.DOCKER,
    icon: DockerIcon,
    label: "Docker"
  },
  {
    name: TechEnum.MYSQL,
    icon: MysqlIcon,
    label: "Mysql"
  },
  {
    name: TechEnum.UML,
    icon: UMLIcon,
    label: "UML"
  }, 
  {
    name: TechEnum.REDIS,
    icon: RedisIcon,
    label: "Redis"
  },
  {
    name: TechEnum.AWS,
    icon: AWSIcon,
    label: "Amazaon Web Services"
  },
  {
    name: TechEnum.SCENE_BUILDER,
    icon: SceneBuilderIcon,
    label: "Scene Builder"
  },
];
