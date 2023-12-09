import {
  Briefcase,
  FolderKanban,
  GraduationCap,
  Home,
  Send,
  User,
  Users,
} from "lucide-react";
import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface MenuItem {
  icon: ReactNode;
  label: string;
  href: string;
}

const menuList: MenuItem[] = [
  {
    icon: <Home size={20} />,
    label: "Início",
    href: "/",
  },
  {
    icon: <User size={20} />,
    label: "Sobre",
    href: "/about",
  },
  {
    icon: <Users size={20} />,
    label: "Recomendações",
    href: "/#",
  },
  {
    icon: <FolderKanban size={20} />,
    label: "Projetos",
    href: "/#",
  },
  {
    icon: <GraduationCap size={20} />,
    label: "Cursos",
    href: "/#",
  },
  {
    icon: <Send size={20} />,
    label: "Contato",
    href: "/#",
  },
  {
    icon: <Briefcase size={20} />,
    label: "Experiência profissional",
    href: "/#",
  },
];

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

      <AnimatePresence>
        {isOpen && (
          <div className="relative z-10">
            <motion.nav
              initial={{ y: 60 }}
              animate={{ y: 10 }}
              exit={{ opacity: 0 }}
              className="rounded bg-gray-200 dark:bg-dark-second-black right-1 absolute inline-block font-poppins z-1000"
            >
              <ul className="text-1xl text-main-black dark:text-main-white">
                {menuList.map((item) => (
                  <li>
                    <a
                      href={item.href}
                      className="flex gap-1 px-3 py-2 hover:bg-gray-300 dark:hover:bg-dark-hover-black "
                    >
                      <span>{item.icon}</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
