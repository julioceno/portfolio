import { Header } from "../../components";

function LandingPage() {
  return (
    <div className="bg-main-white dark:bg-dark-main-black h-screen px-10">
      <Header />
      <main className="mt-20">
        <div className="flex flex-col items-center md:items-start gap-3">
          <h1 className="text-4xl text-main-black dark:text-main-white font-medium text-center md:text-left ">
            Desenvolvedor de <br />
            <span className="text-main-blue font-bold ">software</span>
          </h1>
          <span className="text-main-black dark:text-main-white text-xl font-normal tracking-widest">
            Júlio Nepomuceno
          </span>
        </div>
      </main>
    </div>
  );
}

export { LandingPage };
