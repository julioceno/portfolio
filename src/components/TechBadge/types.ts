export enum TechEnum {
  // FRONTEND
  REACT = "REACT",

  // BACKEND
  NODE = "NODE",
  TRPC = "TRPC",

  // OTHER
  MONOREPO = "MONOREPO",
}

export type TechEnumKeys = keyof typeof TechEnum;

export interface ITech {
  name: TechEnum;
  label: string;
  icon: string;
}

export interface Props {
  name: TechEnumKeys;
}
