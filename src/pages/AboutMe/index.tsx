import { Header } from "../../components";
import { motion } from "framer-motion";
import GymImage from "../../../public/about/gym.png";
import BookImage from "../../../public/about/book.png";
import ProfileImage from "../../../public/about/profile.png";
import { useRef } from "react";
import { useFollowPointer } from "./hooks";

export function AboutMe() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <div className="bg-main-white dark:bg-dark-main-black min-h-screen pb-4 px-10 xl:px-48 flex flex-col">
      <Header />
      <main className="md:mx-64 flex flex-col gap-4">
        <div className="overflow-hidden flex flex-row justify-center pt-16 items-center gap-3 sm:w-full">
          <motion.img
            src={GymImage}
            animate={{ x, y }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 30,
              restDelta: 0.001,
            }}
            className="p-1 w-20 sm:w-48  translate-x-10 rounded-lg"
          />
          <motion.img
            src={ProfileImage}
            ref={ref}
            animate={{ x, y }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 20,
              restDelta: 0.001,
            }}
            className="z-2 w-20 sm:w-48 mb-10 rounded-lg"
          />
          <motion.img
            src={BookImage}
            animate={{ x, y }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 30,
              restDelta: 0.001,
            }}
            className="p-1 w-20 sm:w-48  translate-x-10 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-6">
          <p className=" text-main-black dark:text-main-white text-center md:text-left font-medium font-poppins">
            Sou natural da Bahia e morava la com minha querida vozinha, mas me
            mudei para o Rio de Janeiro na zona Oeste para morar com minha mãe
            desde quando meu irmão nasceu.
          </p>
          <p className=" text-main-black dark:text-main-white text-center md:text-end font-medium font-poppins">
            Sempre fui um amante dos esportes, já andei de skate, fiz parte do
            time de basquete local, lutei karate, joguei futebol Americano e
            rugby. Mas atualmente o único esporte que pratico é a musculação.
          </p>
          <p className=" text-main-black dark:text-main-white text-center md:text-left font-medium font-poppins">
            Fora do esporte, gosto muito de desafios de lógica como montar
            puzzles (Cubo Mágico), resolver sudokus ou resolver problemas que
            envolvem algoritmos.
          </p>
          <p className=" text-main-black dark:text-main-white text-center md:text-end font-medium font-poppins">
            Gosto muito de conversas profundas sobre assuntos diversos, como
            ciência, tecnologia ou até mesmo filosofia.
          </p>
          <p className=" text-main-black dark:text-main-white text-center md:text-left font-medium font-poppins">
            Amo minha familia, e ela sempre vai estar em primeiro lugar em minha
            vida.
          </p>
          <p className=" text-main-black dark:text-main-white text-center md:text-end font-medium font-poppins">
            As qualidades que mais admiro são a lealdade e comprometimento. Seja
            la o que esteja fazendo.
          </p>
        </div>
      </main>
    </div>
  );
}
