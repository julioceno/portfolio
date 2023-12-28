import { Wrap } from '../../components';

import SpaceIcon from '../../../public/space-icon.svg';
import { JobCard } from './components';
import { professionalJourney } from './professional-journey';

function ProfessionalJourney() {
  return (
    <Wrap>
      <div className='flex flex-1 gap-10 mt-10 md:mx-20 text-main-black dark:text-main-white mb-6'>
        <section className='flex-1 '>
          <h2 className='font-semibold tracking-wider text-xl md:text-2xl text-center md:text-start'>
            JORNADA PROFISSIONAL
          </h2>
          <div className='flex flex-col gap-5 mt-5'>
            {professionalJourney.map((job, index) => (
              <JobCard
                companyName={job.companyName}
                image={job.image}
                jobRole={job.jobRole}
                preview={job.preview}
                skills={job.skills}
                startIn={job.startIn}
                endIn={job.endIn}
                techs={job.techs}
                workinDay={job.workinDay}
                isSameJob={job.isSameJob}
                key={`${index}-${job}`}
              />
            ))}
          </div>
        </section>
        <section className='flex-1 hidden 2xl:flex justify-center items-center'>
          <img src={SpaceIcon} alt='mail' className='w-[18rem] md:w-[30rem] ' />
        </section>
      </div>
    </Wrap>
  );
}

export { ProfessionalJourney };
