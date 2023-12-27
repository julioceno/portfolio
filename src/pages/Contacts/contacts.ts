import { SocialMediaEnum } from '../../common';
import { IContactProps } from './types';

import EmailIcon from '../../../public/contacts/email.svg';
import InstagramIcon from '../../../public/contacts/instagram.svg';
import LinkedinIcon from '../../../public/contacts/linkedin.svg';
import TelephoneIcon from '../../../public/contacts/telephone.svg';
import WhatsappIcon from '../../../public/contacts/whatsapp.svg';

export const contacts: IContactProps[] = [
  {
    image: WhatsappIcon,
    link: SocialMediaEnum.WHATSAPP,
    preview: 'Sinta-se a vontade de enviar uma mensagem para o meu whatsapp',
    title: 'Whatsapp',
  },
  {
    image: LinkedinIcon,
    link: SocialMediaEnum.LINKEDIN,
    preview: 'Sinta-se a vontade para enviar uma solicitação de conexão para mim no linkedin',
    title: 'Linkedin',
  },
  {
    image: InstagramIcon,
    link: SocialMediaEnum.INSTAGRAM,
    preview: 'Me conheça melhor e acompanhe no instagram',
    title: 'Instagram',
  },
  {
    image: EmailIcon,
    link: SocialMediaEnum.GMAIL,
    preview: 'Sinta-se a vontade para entrar em contato comigo através do meu email',
    title: 'Gmail',
  },
  {
    image: TelephoneIcon,
    link: SocialMediaEnum.TELPHONE,
    preview: 'Faça uma ligação e vamos tomar um cafezinho conversando sobre algo',
    title: 'Telefone',
  },
];
