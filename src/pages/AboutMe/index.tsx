import { motion } from 'framer-motion';
import { useRef } from 'react';
import BookImage from '../../../public/book.png';
import GymImage from '../../../public/gym.png';
import ProfileImage from '../../../public/profile.png';
import { Wrap } from '../../components';
import { useFollowPointer } from './hooks';

const paragraphs = [
  `Sou natural da Bahia e morava la com minha querida vozinha, mas me
  mudei para o Rio de Janeiro na zona Oeste para morar com minha mãe
  desde que meu irmão nasceu.`,

  `Sempre fui um amante dos esportes, já andei de skate, fiz parte do
  time de basquete local, lutei karate, joguei futebol Americano e
  rugby. Mas atualmente o único esporte que pratico é a musculação.`,

  `Fora do esporte, gosto muito de desafios de lógica como montar
  puzzles (Cubo Mágico), resolver sudokus ou resolver problemas que
  envolvem algoritmos.`,

  `Gosto muito de conversas profundas sobre assuntos diversos, como:
  ciência, tecnologia e até mesmo filosofia.`,
  `Amo minha familia, e ela sempre vai estar em primeiro lugar em
  minha vida.`,

  `As qualidades que mais admiro são a lealdade e comprometimento.
  Seja la o que esteja fazendo.`,
];

export function AboutMe() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <Wrap>
      <div className='md:mx-10 2xl:mx-64 flex flex-col gap-4 mb-6'>
        <div className='bp-400px:overflow-hidden flex flex-row justify-center pt-16 items-center gap-3 sm:w-full'>
          <motion.img
            src={GymImage}
            animate={{ x, y }}
            transition={{
              type: 'spring',
              damping: 30,
              stiffness: 30,
              restDelta: 0.001,
            }}
            className='p-1 w-14 bp-400px:w-20 sm:w-32 md:w-36 lg:w-48 rounded-lg image-with-shadow'
          />
          <motion.img
            src={ProfileImage}
            ref={ref}
            animate={{ x, y }}
            transition={{
              type: 'spring',
              damping: 30,
              stiffness: 20,
              restDelta: 0.001,
            }}
            className='z-2 w-14 bp-400px:w-20 sm:w-32 md:w-36 lg:w-48 mb-10 rounded-lg image-with-shadow'
          />
          <motion.img
            src={BookImage}
            animate={{ x, y }}
            transition={{
              type: 'spring',
              damping: 30,
              stiffness: 30,
              restDelta: 0.001,
            }}
            className='p-1 w-14 bp-400px:w-20 sm:w-32 md:w-36 lg:w-48 rounded-lg image-with-shadow'
          />
        </div>
        <div className='flex flex-col gap-6'>
          {paragraphs.map((text, index) => {
            const value = index % 2;
            const oddNumber = !value;

            return (
              <p
                className={`text-sm md:text-base text-main-black dark:text-main-white font-medium font-poppins text-center ${
                  oddNumber ? 'md:text-left' : 'md:text-end'
                }`}
              >
                {text}
              </p>
            );
          })}
        </div>
      </div>
    </Wrap>
  );
}
