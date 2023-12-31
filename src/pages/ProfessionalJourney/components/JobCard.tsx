import { format, formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Card, TechBadge } from '../../../components';
import { IProfessionalJourneyProps } from '../types';

function formatDateInPattern(date: Date) {
  return format(date, "MMMM 'de' yyyy", { locale: ptBR });
}

function JobCard({
  companyName,
  image,
  jobRole,
  preview,
  skills,
  startIn,
  techs,
  workinDay,
  endIn,
  isSameJob,
}: IProfessionalJourneyProps) {
  const startInFormatted = formatDateInPattern(startIn);

  const endInFormatted = endIn ? formatDateInPattern(endIn) : 'Presente';

  const distance = formatDistance(startIn, endIn || new Date(), { locale: ptBR });

  return (
    <div className='flex gap-3'>
      <div className='hidden md:flex flex-col gap-2 items-center'>
        <div className='h-5 w-5 bg-gray-300 dark:bg-dark-second-black rounded-full' />
        <div
          className={`h-full w-1 rounded-sm -mb-2 border-gray-300 dark:border-dark-second-black border-2 ${
            isSameJob && 'border-dashed'
          }`}
        />
      </div>
      <Card>
        <div className='flex flex-wrap gap-3 font-poppins text-main-black dark:text-main-white px-5 py-3 items-start text-center md:text-start'>
          <header className='flex flex-wrap  md:flex-nowrap justify-center md:justify-start gap-4 w-full'>
            <img src={image} alt={companyName} />
            <div className='flex flex-col gap-0.5 md:gap-0 '>
              <h5 className='text-xl font-medium'>{jobRole}</h5>
              <p className='text-xs font-normal'>
                {companyName} · {workinDay}
              </p>
              <p className='text-xs font-normal text-gray-600 dark:text-gray-300 mt-0.5'>
                {startInFormatted} - {endInFormatted} | {distance}
              </p>
            </div>
          </header>
          <div className='flex flex-col w-full gap-1'>
            <p className='text-xs font-light mt-1 leading-5 tracking-wider'>{preview}</p>
            <ul className='mt-1 flex flex-col gap-1 list-disc list-inside'>
              {skills.map((skill) => (
                <li className='text-xs font-light'>{skill}</li>
              ))}
            </ul>
            <div className='flex flex-col gap-1 mt-1'>
              <h6 className='text-xs'>Competências</h6>
              <div className='flex flex-wrap gap-1 md:gap-2 justify-center md:justify-start '>
                {techs.map((tech) => (
                  <TechBadge name={tech} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export { JobCard };
