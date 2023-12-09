import { Footer, Header } from "../../components";

export function NotFound() {
  return (
    <div className="bg-main-white dark:bg-dark-main-black min-h-screen flex flex-col">
      <section className="flex flex-col flex-1 px-10 xl:px-48">
        <Header />
        <main className="md:mx-64 flex flex-col flex-1 gap-4 mb-6 justify-center items-center">
          <h1 className="font-poppins text-2xl text-main-black dark:text-main-white text-center">
            Ops, você acessou uma tela que ainda não foi construida!
          </h1>
          <a
            className="h-10 border-2 mt-2 px-10 md:px-8 border-main-blue text-main-blue hover:bg-gray-100 dark:hover:bg-dark-hover-black rounded-full font-poppins flex justify-center items-center cursor-pointer"
            href="/"
          >
            Me leve de volta
          </a>
        </main>
      </section>
      <Footer />
    </div>
  );
}
