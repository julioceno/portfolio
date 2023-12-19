import { useEffect, useState } from 'react';
import { TechBadge, TechEnumKeys, Wrap } from '../../components';
import { techs as techsArray } from './techs';

export function Courses() {
  const [isExpand, setIsExpand] = useState(false);
  const [techs, setTechs] = useState<TechEnumKeys[]>([]);

  useEffect(() => {
    if (isExpand) {
      return setTechs(techsArray);
    }

    setTechs(techsArray.slice(0, 6));
  }, [isExpand]);

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
            <button
              className='text-xs self-end hover:underline '
              onClick={() => setIsExpand(!isExpand)}
            >
              {isExpand ? 'Mostrar menos...' : 'Mostrar mais...'}
            </button>
          </div>
        </section>
      </div>
    </Wrap>
  );
}
