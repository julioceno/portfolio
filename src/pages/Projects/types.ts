import { TechEnumKeys } from "../../components";

export interface IProjectCardProps {
  title: string;
  preview: string;
  paragraphs: string[];
  techs: TechEnumKeys[];
}
