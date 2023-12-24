import MailIcon from '../../../public/mail-icon.svg';
import MessageIcon from '../../../public/message.svg';
import { Title, Wrap } from '../../components';
import { ContactCard } from './components';
import { contacts } from './contacts';

function Contacts() {
  return (
    <Wrap>
      <div className='flex flex-col flex-1 gap-10 mt-10 md:mx-20 text-main-black dark:text-main-white mb-6'>
        <div className='self-end flex justify-end'>
          <Title
            image={MessageIcon}
            text='PARA ENTRAR EM CONTATO COMIGO BASTA CLICAR NO CARD DE ALGUMA DAS FORMAS DISPONÍVEIS'
            alt='message'
          />
        </div>
        <div className='flex gap-10'>
          <section className='flex-1 '>
            <h2 className='font-semibold tracking-wider text-xl md:text-2xl text-center md:text-start'>
              CONTATOS
            </h2>
            <div className='flex flex-col gap-5 mt-5'>
              {contacts.map((contact, index) => (
                <ContactCard
                  image={contact.image}
                  link={contact.link}
                  preview={contact.preview}
                  title={contact.title}
                  key={`${index}-${contact.title}`}
                />
              ))}
            </div>
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
