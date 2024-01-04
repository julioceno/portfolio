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
  PRISMA = 'PRISMA',
  SPRING_BOOT = 'SPRING_BOOT',

  // OTHER
  MONOREPO = 'MONOREPO',
  FIGMA = 'FIGMA',
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
