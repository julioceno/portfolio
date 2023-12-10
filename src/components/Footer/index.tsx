import { Github, HeartIcon, Instagram, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { SocialMediaEnum } from "../../common";

export function Footer() {
  const [year, setYear] = useState<number>();

  useEffect(() => {
    const date = new Date();
    const currentYear = date.getFullYear();

    setYear(currentYear);
  }, []);

  return (
    <footer className="bg-main-blue dark:bg-dark-main-blue min-h-28 py-3 text-main-white font-poppins flex flex-col justify-end gap-2">
      <div className="flex justify-center">
        <ul className="flex gap-2">
          <li className="hover:bg-black/30 p-1 rounded-sm cursor-pointer">
            <a href={SocialMediaEnum.LINKEDIN} target="_blank">
              <Linkedin />
            </a>
          </li>
          <li className="hover:bg-black/30 p-1 rounded-sm cursor-pointer">
            <a href={SocialMediaEnum.GITHUB} target="_blank">
              <Github />
            </a>
          </li>
          <li className="hover:bg-black/30 p-1 rounded-sm cursor-pointer">
            <a href={SocialMediaEnum.INSTAGRAM} target="_blank">
              <Instagram />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <p className="text-sm justify-center items-center text-center">
          Desenvolvido com{" "}
          <HeartIcon
            size={20}
            className="fill-red-600 text-main-black inline-block"
          />{" "}
          por{" "}
          <a
            className="text-white underline font-medium tracking-wider cursor-pointer hover:text-blue-300"
            href={SocialMediaEnum.LINKEDIN}
            target="_blank"
          >
            Júlio Nepomuceno
          </a>
        </p>
      </div>
      <p className="flex text-xs font-light justify-center">
        &copy; {year} Todos os direitos reservados
      </p>
    </footer>
  );
}
