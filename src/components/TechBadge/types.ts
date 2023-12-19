export enum TechEnum {
  // FRONTEND
  JAVASCRIPT = 'JAVASCRIPT',
  TYPESCRIPT = 'TYPESCRIPT',
  REACT = 'REACT',

  // BACKEND
  NODE = 'NODE',
  TRPC = 'TRPC',
  NEST = 'NEST',
  JAVA = 'JAVA',

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
