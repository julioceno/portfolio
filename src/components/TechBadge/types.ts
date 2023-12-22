export enum TechEnum {
  // FRONTEND
  JAVASCRIPT = 'JAVASCRIPT',
  TYPESCRIPT = 'TYPESCRIPT',
  REACT = 'REACT',
  HTML = 'HTML',
  CSS = 'CSS',
  TAILWIND = 'TAILWIND',

  // BACKEND
  NODE = 'NODE',
  TRPC = 'TRPC',
  GRPC = 'GRPC',
  NEST = 'NEST',
  JAVA = 'JAVA',
  TENSORFLOW = 'TENSORFLOW',

  // OTHER
  MONOREPO = 'MONOREPO',
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
