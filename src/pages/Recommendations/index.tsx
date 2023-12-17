import LinkedinIcon from '../../../public/linkedin.svg';
import { SocialMediaEnum } from '../../common';
import { Title, Wrap } from '../../components';
import { RecommendationCard } from './components';
import { recommendations } from './recommendations';

export function Recommendations() {
  return (
    <Wrap>
      <div className='flex flex-col flex-1 gap-10 mt-10 md:mx-20 mb-6'>
        <div className='self-end flex justify-end'>
          <Title
            image={LinkedinIcon}
            text='TODOS AS RECOMENDAÇÕES APRESENTADAS FORAM TIRADOS DO MEU LINKEDIN'
            wordLink='LINKEDIN'
            link={SocialMediaEnum.LINKEDIN}
            alt='linkedin'
          />
        </div>
        <div className='flex flex-col gap-4'>
          {recommendations.map((recommendation, index) => (
            <RecommendationCard
              date={recommendation.date}
              name={recommendation.name}
              photo={recommendation.photo}
              profession={recommendation.profession}
              text={recommendation.text}
              profileUrl={recommendation.profileUrl}
              key={`${index}-${recommendation.name}`}
            />
          ))}
        </div>
      </div>
    </Wrap>
  );
}
