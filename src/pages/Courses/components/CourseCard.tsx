import { Card, TechBadge } from '../../../components';
import { ICourseCardProps } from '../types';

function CourseCard({ techs, preview, title, image, certificate }: ICourseCardProps) {
  return (
    <Card>
      <div className='flex flex-col  gap-3 font-poppins'>
        <img src={image} alt={title} />
        <div className='flex flex-col gap-1 p-2 pb-5 '>
          <h5 className='text-md font-medium text-center md:text-start'>{title}</h5>
          <div className='flex flex-wrap gap-1 md:gap-2 justify-center md:justify-start'>
            {techs.map((tech) => (
              <TechBadge name={tech} />
            ))}
          </div>
          <p className='text-xs mt-1 text-center md:text-start'>{preview}</p>
          {certificate && (
            <a
              className='text-xs mt-1 text-center cursor-pointer text-gray-600 dark:text-gray-300 underline'
              href={certificate}
              download
            >
              Baixa Certificado
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}

export { CourseCard };
