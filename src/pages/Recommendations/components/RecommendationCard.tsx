import { format } from 'date-fns';
import { Card } from '../../../components';
import { IRecommendCardProps } from '../types';

export function RecommendationCard({
  date,
  name,
  photo,
  profession,
  text,
  profileUrl,
}: IRecommendCardProps) {
  const dateFormatted = format(date, 'dd/MM/yyyy');

  return (
    <Card>
      <div className='font-poppins text-main-black dark:text-main-white px-4 py-2 flex flex-col gap-2'>
        <a
          className='flex items-center gap-2 cursor-pointer self-start'
          target='_blank'
          href={profileUrl}
        >
          <img
            src={photo}
            alt={name}
            className='w-12 h-12 rounded-full border-t-2 border-l-2  border-white dark:border-main-black'
          />
          <div>
            <h3 className='text-md'>{name}</h3>
            <p className='text-xs text-gray-500 dark:text-gray-300'>
              {profession} | {dateFormatted}
            </p>
          </div>
        </a>
        <p className='text-sm'>{text}</p>
      </div>
    </Card>
  );
}
