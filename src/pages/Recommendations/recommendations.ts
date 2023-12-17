import { IRecommendCardProps } from './types';

import CamilanPhoto from '../../../public/recommendations/camila.jpeg';
import JeffersonPhoto from '../../../public/recommendations/jefferson.jpeg';
import MarianaPhoto from '../../../public/recommendations/mariana.jpeg';
import RodrigoPhoto from '../../../public/recommendations/rodrigo.jpeg';

export const recommendations: IRecommendCardProps[] = [
  {
    date: new Date(2023, 10, 29),
    name: 'Rodrigo Ferrão',
    photo: RodrigoPhoto,
    profession: 'QA',
    profileUrl: 'https://www.linkedin.com/in/rodrigoferrao1/',
    text: 'Tive o privilégio de trabalhar ao lado do Júlio em diversos projetos, posso dizer com propriedade que a sua dedicação à melhoria continua e à qualidade dos projetos foi notável ao longo da nossa parceria. Júlio sempre demonstrou determinação e uma grande habilidade quando se tratava de resolver desafios complexos, além de suas hábilidades técnicas, é importante destacar a contribuição de Júlio para a alavancagem de todo o time. Sua disposição a compartilhar conhecimentos e experiências foram enriquecedores para toda a empresa. Júlio não só é um desenvolvedor excepcional, mas também um membro valioso para qualquer time de desenvolvimento.',
  },
  {
    date: new Date(2023, 10, 28),
    name: 'Mariana Bernardes',
    photo: MarianaPhoto,
    profession: 'QA',
    profileUrl: 'https://www.linkedin.com/in/mariana-bernardes-792107202/',
    text: 'Tive o prazer de trabalhar com o Júlio como desenvolvedor fullstack. Sua habilidade técnica é impressionante, combinada com uma abordagem proativa e colaborativa, contribuiu significativamente para o sucesso do nosso projeto. Júlio é um profissional dedicado, capaz de enfrentar desafios complexos com criatividade e eficiência . Sua paixão pela tecnologia e comprometimento com a excelência fazem dele um colega excepcional.',
  },
  {
    date: new Date(2023, 10, 14),
    name: 'Camila Coloneze',
    photo: CamilanPhoto,
    profileUrl: 'https://www.linkedin.com/in/camila-coloneze/',
    profession: 'Analista de Requisitos',
    text: 'É um privilégio falar sobre o Júlio como um desenvolvedor extraordinário. Sua paixão pela programação é evidente em cada projeto que aborda. Com uma habilidade natural para resolver problemas e uma sede incessante de aprendizado, Júlio é um talento promissor no mundo da tecnologia. Sua dedicação, ética de trabalho exemplar e disposição para enfrentar desafios destacam-no como um ativo valioso. Não tenho dúvidas de que Júlio continuará a crescer e alcançar grandes realizações em sua carreira.',
  },
  {
    date: new Date(2023, 10, 14),
    name: 'Jefferson D. Santos',
    photo: JeffersonPhoto,
    profession: 'Desenvolvedor Fullstack',
    profileUrl: 'https://www.linkedin.com/in/jeffersondrs/',
    text: 'Tive o prazer de trabalhar junto com Júlio Nepomuceno durante um curso da Udemy. Durante nosso tempo juntos, pude observar o comprometimento e a dedicação do Julio em relação ao aprendizado e à colaboração. Sua capacidade de absorver rapidamente conceitos complexos e aplicá-los de forma prática foi impressionante. Além disso, sua atitude proativa e habilidades de comunicação tornaram a experiência de trabalho em equipe ainda mais produtiva. Júlio é um profissional comprometido, ágil e um excelente colega de equipe. Recomendo-o sem hesitação.',
  },
];
