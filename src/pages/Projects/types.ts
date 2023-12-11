import { TechEnumKeys } from "../../components";

export interface IProjectCardProps {
  id: string;
  title: string;
  preview: string;
  paragraphs: string[];
  techs: TechEnumKeys[];
  images: string[];
  githubLink?: string;
  applicationLink?: string;
}
