export enum TechEnum {
  // FRONTEND
  JAVASCRIPT = 'JAVASCRIPT',
  TYPESCRIPT = 'TYPESCRIPT',
  REACT = 'REACT',
  REACT_NATIVE = 'REACT_NATIVE',
  HTML = 'HTML',
  CSS = 'CSS',
  TAILWIND = 'TAILWIND',
  MATERIAL_UI = 'MATERIAL_UI',
  FORMIK = 'FORMIK',
  MOBX = 'MOBX',
  REACT_FINAL_FORM = 'REACT_FINAL_FORM',
  ZOD = 'ZOD',
  FRAMER_MOTION = 'FRAMER_MOTION',
  JAVA_FX = 'JAVA_FX',

  // BACKEND
  NODE = 'NODE',
  DENO = 'DENO',
  EXPRESS = 'EXPRESS',
  TRPC = 'TRPC',
  GRPC = 'GRPC',
  NEST = 'NEST',
  LOOPBACK = 'LOOPBACK',
  FEATHERS = 'FEATHERS',
  JAVA = 'JAVA',
  JEST = 'JEST',
  TENSORFLOW = 'TENSORFLOW',
  POSTGRESQL = 'POSTGRESQL',
  MYSQL = 'MYSQL',
  PRISMA = 'PRISMA',
  SPRING_BOOT = 'SPRING_BOOT',
  MONGODB = 'MONGODB',
  H2_CONSOLE = 'H2_CONSOLE',
  JDBC="JDBC",
  JPA="JPA",

  // OTHER
  MONOREPO = 'MONOREPO',
  FIGMA = 'FIGMA',
  DOCKER = 'DOCKER',
}

export type TechEnumKeys = keyof typeof TechEnum;

export interface ITech {
  name: TechEnum;
  label: string;
  icon: string;
}

export interface Props {
  name: TechEnumKeys;
  hasShadow?: boolean;
}
