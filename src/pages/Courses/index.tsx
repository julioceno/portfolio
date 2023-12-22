import { useEffect, useState } from 'react';
import { TechBadge, TechEnumKeys, Wrap } from '../../components';
import { CourseCard } from './components/CourseCard';
import { courses } from './courses';
import { techs as techsArray } from './techs';

export function Courses() {
  const [isExpand, setIsExpand] = useState(false);
  const [techs, setTechs] = useState<TechEnumKeys[]>([]);

  useEffect(() => {
    if (isExpand) {
      return setTechs(techsArray);
    }

    setTechs(techsArray.slice(0, 10));
  }, [isExpand]);

  return (
    <Wrap>
      <div className='flex flex-col gap-20 flex-1 font-poppins text-main-black dark:text-main-white mb-6'>
        <section className=' mt-10 flex flex-col gap-3 md:gap-5 '>
          <h2 className='font-semibold tracking-wider text-xl md:text-2xl text-center md:text-start'>
            TENHO EXPERIÊNCIA EM
          </h2>
          <div className='flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start'>
            {techs.map((tech) => (
              <TechBadge name={tech} hasShadow />
            ))}
            <button
              className='text-xs self-end hover:underline text-gray-600 dark:text-gray-300'
              onClick={() => setIsExpand(!isExpand)}
            >
              {isExpand ? 'Mostrar menos...' : 'Mostrar mais...'}
            </button>
          </div>
        </section>
        <section className='flex flex-col gap-3 md:gap-5 '>
          <h2 className='font-semibold tracking-wider text-xl md:text-2xl text-center md:text-start'>
            CURSOS
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  gap-5 xmd:px-28 md:px-0'>
            {courses.map((course, index) => (
              <CourseCard
                title={course.title}
                image={course.image}
                preview={course.preview}
                techs={course.techs}
                certificate={course.certificate}
                key={`${index}-${course.title}`}
              />
            ))}
          </div>
        </section>
      </div>
    </Wrap>
  );
}
