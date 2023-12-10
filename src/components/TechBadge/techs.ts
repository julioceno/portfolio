import NodeIcon from "../../../public/techs/node.svg";
import ReactIcon from "../../../public/techs/react.svg";
import TRPCIcon from "../../../public/techs/trpc.svg";
import VercelIcon from "../../../public/techs/vercel.svg";
import { ITech, TechEnum } from "./types";

export const techsArray: ITech[] = [
  {
    name: TechEnum.NODE,
    icon: NodeIcon,
    label: "Node JS",
  },
  {
    name: TechEnum.REACT,
    icon: ReactIcon,
    label: "React JS",
  },
  {
    name: TechEnum.MONOREPO,
    icon: VercelIcon,
    label: "Monorepo",
  },
  {
    name: TechEnum.TRPC,
    icon: TRPCIcon,
    label: "TRPC",
  },
];
