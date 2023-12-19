import { techsArray } from './techs';
import { Props } from './types';
export * from './techs';
export * from './types';

function TechBadge({ name, hasShadow = false }: Props) {
  const tech = techsArray.find((tech) => tech.name === name)!;

  const classShadow = hasShadow && 'shadow-black-shadow dark:shadow-white-shadow';

  return (
    <div
      className={`min-w-30 flex items-center justify-center gap-x-2 border-[.1rem] rounded px-2 py-1 border-main-black dark:border-main-white ${classShadow}`}
    >
      <p className='text-xs font-poppins text-main-black dark:text-main-white'>{tech.label}</p>
      <img src={tech.icon} alt={tech.label} className='w-5' />
    </div>
  );
}

export { TechBadge };
