import { TechEnumKeys } from '../../components';

export interface ICourseCardProps {
  image: string;
  title: string;
  techs: TechEnumKeys[];
  preview: string;
  certificate?: string;
}
