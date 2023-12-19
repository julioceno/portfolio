import { TechBadge, Wrap } from '../../components';
import { techs } from './techs';

export function Courses() {
  return (
    <Wrap>
      <div className='flex flex-col gap-3 flex-1'>
        <section className='font-poppins mt-10 flex flex-col gap-3 md:gap-5 '>
          <h1 className='text-main-black dark:text-main-white font-semibold tracking-wider text-xl md:text-2xl text-center md:text-start'>
            TENHO EXPERIÊNCIA EM
          </h1>
          <div className='flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start'>
            {techs.map((tech) => (
              <TechBadge name={tech} hasShadow />
            ))}
          </div>
        </section>
      </div>
    </Wrap>
  );
}
