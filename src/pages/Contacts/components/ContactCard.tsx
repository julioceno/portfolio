import { Card } from '../../../components';
import { IContactProps } from '../types';

function ContactCard({ image, link, preview, title }: IContactProps) {
  return (
    <Card>
      <a
        className='bp-550px:h-32 flex flex-wrap bp-550px:flex-nowrap gap-3 cursor-pointer font-poppins text-main-black dark:text-main-white'
        target='_blank'
        href={link}
      >
        <img src={image} alt={title} className='h-full' />
        <div className='p-2 pb-5 flex flex-col w-full'>
          <h5 className='text-xl font-medium text-center bp-550px:text-start'>{title}</h5>
          <p className='text-sm text-center bp-550px:text-start'>{preview}</p>
        </div>
      </a>
    </Card>
  );
}

export { ContactCard };
