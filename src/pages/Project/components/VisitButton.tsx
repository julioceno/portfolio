import { MapPinned } from "lucide-react";

interface IProps {
  link: string;
}

export function VisitButton({ link }: IProps) {
  return (
    <a
      className="flex justify-center items-center gap-1 text-base bg-red-400 hover:bg-red-400/90 duration-500 text-main-white py-1 px-4 md:px-5 rounded cursor-pointer"
      href={link}
      target="_blank"
    >
      Visitar <MapPinned size={20} />
    </a>
  );
}
