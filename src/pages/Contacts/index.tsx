import MailIcon from '../../../public/mail.svg';
import MessageIcon from '../../../public/message.svg';
import { Title, Wrap } from '../../components';
import { Contact } from './components';
import { contacts } from './contacts';

function Contacts() {
  return (
    <Wrap>
      <div className='flex flex-col flex-1 gap-10 mt-10 md:mx-20 mb-6'>
        <div className='self-end flex justify-end'>
          <Title
            image={MessageIcon}
            text='PARA ENTRAR EM CONTATO COMIGO BASTA CLICAR NO CARD DE ALGUMA DAS FORMAS DISPONIVEIS'
            alt='message'
          />
        </div>
        <div className='flex gap-10'>
          <section className='flex-1 flex flex-col gap-5 '>
            {contacts.map((contact, index) => (
              <Contact
                image={contact.image}
                link={contact.link}
                preview={contact.preview}
                title={contact.title}
                key={`${index}-${contact.title}`}
              />
            ))}
          </section>
          <section className='flex-1 hidden 2xl:flex justify-center items-center'>
            <img src={MailIcon} alt='mail' className='w-[18rem] md:w-[30rem] ' />
          </section>
        </div>
      </div>
    </Wrap>
  );
}

export { Contacts };
