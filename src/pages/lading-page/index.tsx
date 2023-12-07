import { Header } from "../../components";

function LandingPage() {
  return (
    <div className="bg-main-white dark:bg-dark-main-black h-screen px-10">
      <Header />
      <main className="mt-20 flex flex-col items-center md:flex-row gap-10 ">
        <div className="flex flex-col items-center md:items-start gap-3">
          <h1 className="text-4xl text-main-black dark:text-main-white font-medium text-center md:text-left font-poppins">
            Desenvolvedor de <br />
            <span className="text-main-blue font-bold">software</span>
          </h1>
          <span className="text-main-black dark:text-main-white text-xl font-normal tracking-widest">
            Júlio Nepomuceno
          </span>
          <button className="h-10 border-2 mt-2 px-10 md:px-8 border-main-blue text-main-blue hover:bg-gray-100 rounded-full font-poppins">
            BAIXAR CURRÍCULO
          </button>
        </div>
        <img
          src="./src/assets/main-icon.svg"
          alt="Imagem principal"
          className="w-[18rem] md:w-[60rem]"
        />
        <p className="text-center text-md text-main-black dark:text-main-white leading-6 font-poppins drop-shadow-lg ">
          Sou um desenvolvedor de software focado na resolução de problemas,
          acostumado em trabalhar com metodologias ágeis. Minha paixão está em
          transformar desafios em soluções eficientes, sempre em busca da
          excelência no desenvolvimento de software.
        </p>
      </main>
    </div>
  );
}

export { LandingPage };
