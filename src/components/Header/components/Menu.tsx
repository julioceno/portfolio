import {
  Briefcase,
  FolderKanban,
  GraduationCap,
  Send,
  User,
  Users,
} from "lucide-react";
import { useState } from "react";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const genericHamburgerLine = `h-[.3rem] w-10 my-1 rounded-full bg-main-black dark:bg-main-white duration-300`;

  return (
    <div className="relative">
      <button
        className="h-16 w-16 bg-gray-200 hover:bg-gray-300 dark:bg-dark-second-black dark:hover:bg-dark-hover-black rounded-full flex flex-col justify-center items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen && "rotate-45 translate-y-3 "
          }`}
        />
        <div className={`${genericHamburgerLine} ${isOpen && "opacity-0"}`} />
        <div
          className={`${genericHamburgerLine} ${
            isOpen && "-rotate-45 -translate-y-3"
          }`}
        />
      </button>
      {isOpen && (
        <nav className="w-[10rem] rounded bg-gray-200 dark:bg-dark-second-black mt-3 right-1 inline-block absolute ">
          <ul className="text-1xl text-main-black dark:text-main-white">
            <li className="">
              <a
                href="#"
                className="flex gap-1 px-3 py-2 hover:bg-gray-300 dark:hover:bg-dark-hover-black "
              >
                <span>
                  <User size={20} />
                </span>
                Quem sou eu
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="flex gap-1 px-3 py-2 hover:bg-gray-300 dark:hover:bg-dark-hover-black "
              >
                <span>
                  <Users size={20} />
                </span>
                Recomendações
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="flex gap-1 px-3 py-2 hover:bg-gray-300 dark:hover:bg-dark-hover-black "
              >
                <span>
                  <FolderKanban size={20} />
                </span>
                Projetos
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="flex gap-1 px-3 py-2 hover:bg-gray-300 dark:hover:bg-dark-hover-black "
              >
                <span>
                  <GraduationCap size={20} />
                </span>
                Cursos
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="flex gap-1 px-3 py-2 hover:bg-gray-300 dark:hover:bg-dark-hover-black "
              >
                <span>
                  <Send size={20} />
                </span>
                Contato
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="flex gap-1 px-3 py-2 hover:bg-gray-300 dark:hover:bg-dark-hover-black "
              >
                <span>
                  <Briefcase size={20} />
                </span>
                Experiência profissional
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
