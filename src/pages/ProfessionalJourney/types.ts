import { TechEnumKeys } from '../../components';

export enum WorkinDayEnum {
  PART_TIME = 'Meio Período',
  FULL_TIME = 'Tempo Integral',
}

export interface IProfessionalJourneyProps {
  jobRole: string;
  companyName: string;
  image: string;
  startIn: Date;
  endIn?: Date;
  preview: string;
  skills: string[];
  techs: TechEnumKeys[];
  workinDay: WorkinDayEnum;
  isSameJob?: boolean;
}
