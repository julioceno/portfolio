import { observer } from 'mobx-react-lite';
import MainIcon from '../../../public/main-icon.svg';
import Resume from '../../../public/resume-julio-nepomuceno.pdf';
import { TechBadge, TechEnum, Wrap } from '../../components';
import { themeStore } from '../../components/Header/store';
import './style.css';

const primaryTechs = [TechEnum.REACT, TechEnum.NODE, TechEnum.NEST, TechEnum.JAVA, TechEnum.SPRING_BOOT,TechEnum.DOCKER ]

const Home = observer(() => {
  const isDarkMode = themeStore.theme === 'dark';

  const classTextShadow = isDarkMode ? 'text-with-shadow-dark' : 'text-with-shadow';
  return (
    <Wrap ocultFooter>
      <div className='flex-1 flex justify-center items-center mt-5 md:mt-0'>
        <main className='flex flex-col items-center gap-5 md:grid grid-cols-2'>
          <div className='flex flex-col items-center md:items-start gap-3 grid-col-2'>
            <h1 className='text-2xl bp-400px:text-4xl lg:text-5xl xl:text6xl text-main-black dark:text-main-white font-medium text-center md:text-left font-poppins'>
              Desenvolvedor de <br />
              <span className='text-main-blue font-bold'>software</span>
            </h1>
            <span className='text-main-black dark:text-main-white text-1xs md:text-xl font-normal tracking-widest'>
              Júlio Nepomuceno
            </span>
            <a
              className='flex items-center h-10 border-2 mt-2 px-10 md:px-8 border-main-blue text-main-blue hover:bg-gray-100 dark:hover:bg-dark-hover-black rounded-full font-poppins text-sm md:text-base'
              href={Resume}
              download
            >
              BAIXAR CURRÍCULO
            </a>
            <div className='flex flex-wrap gap-2 justify-center md:justify-start sm:w-4/6 mt-1'>
              {primaryTechs.map((tech) => (
              <TechBadge name={tech} hasShadow />
              ))}
            </div>
          </div>
          <img
            src={MainIcon}
            alt='Imagem principal'
            className='w-[18rem] md:w-[30rem] md:place-self-end row-span-2'
          />
          <p
            className={`text-center md:text-left text-sm md:text-base text-main-black dark:text-main-white leading-6 font-poppins lg:w-7/12 ${classTextShadow}`}
          >
            Sou um desenvolvedor de software focado na resolução de problemas, acostumado em
            trabalhar com metodologias ágeis. Minha paixão está em transformar desafios em soluções
            eficientes, sempre em busca da excelência no desenvolvimento de software.
          </p>
        </main>
      </div>
    </Wrap>
  );
});

export { Home };

