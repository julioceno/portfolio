import { ReactNode } from "react";
import { Footer, Header } from "..";

interface Props {
  children: ReactNode;
  ocultFooter?: boolean;
}

export function Wrap({ children, ocultFooter }: Props) {
  return (
    <div className="bg-main-white dark:bg-dark-main-black min-h-screen flex flex-col">
      <section className="flex flex-col flex-1 px-10 xl:px-48">
        <Header />
        <main className="flex-1 flex">{children}</main>
      </section>
      {!ocultFooter && <Footer />}
    </div>
  );
}
