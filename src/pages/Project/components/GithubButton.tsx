import { Github } from "lucide-react";

interface IProps {
  link: string;
}

export function GithubButton({ link }: IProps) {
  return (
    <a
      className="flex justify-center items-center gap-1 text-base bg-github-dark hover:bg-github-dark/90 duration-500 text-main-white py-1 px-4 md:px-5 rounded cursor-pointer"
      href={link}
      target="_blank"
    >
      Github <Github size={20} />
    </a>
  );
}
