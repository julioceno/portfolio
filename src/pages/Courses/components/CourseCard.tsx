import { Card, TechBadge } from '../../../components';
import { ICourseCardProps } from '../types';

function CourseCard({ techs, preview, title, image }: ICourseCardProps) {
  return (
    <Card>
      <div className='flex h-20 md:h-28 gap-3 font-poppins'>
        <img src={image} alt={title} />
        <div className='flex flex-col gap-1 py-2'>
          <h5 className='text-md'>{title}</h5>
          <div className='flex flex-wrap gap-1 md:gap-2 justify-center md:justify-start'>
            {techs.map((tech) => (
              <TechBadge name={tech} />
            ))}
          </div>
          <p className='text-xs mt-1'>{preview}</p>
        </div>
      </div>
    </Card>
  );
}

export { CourseCard };
