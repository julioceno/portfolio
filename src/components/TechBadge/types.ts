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

  // BACKEND
  NODE = 'NODE',
  TRPC = 'TRPC',
  GRPC = 'GRPC',
  NEST = 'NEST',
  JAVA = 'JAVA',
  JEST = 'JEST',
  TENSORFLOW = 'TENSORFLOW',
  POSTGRESQL = 'POSTGRESQL',

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
