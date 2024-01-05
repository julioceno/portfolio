import { ReactNode } from 'react';
import { Footer, Header } from '..';
import { SCROLLBAR_DEFAULT } from '../../common/tailwind-styles';

interface Props {
  children: ReactNode;
  ocultFooter?: boolean;
}

export function Wrap({ children, ocultFooter }: Props) {
  return (
    <div className={`bg-main-white dark:bg-dark-main-black h-screen`}>
      <div
        className={`h-full flex flex-col overflow-y-auto max-w-[2000px] mx-auto ${SCROLLBAR_DEFAULT}`}
      >
        <section className='flex-1 flex flex-col px-10 xl:px-48'>
          <Header />
          <main className='flex-1 flex'>{children}</main>
        </section>
        {!ocultFooter && <Footer />}
      </div>
    </div>
  );
}
