import { useTranslation } from 'react-i18next';
import SocialLink from './SocialLink';

const Options = () => {
  const { t } = useTranslation('home');

  return (
    <div className="flex flex-col laptop:flex-row laptop:justify-between laptop:w-full items-center justify-center h-full">
      <ul className="flex flex-col laptop:flex-row items-center justify-center h-full text-orange-thema text-2xl cursor-pointer">
        <li className="my-4 laptop:mr-2 hover:text-3xl text-transition">
          {t('home')}
        </li>
        <li className="my-4 laptop:mr-2 hover:text-3xl text-transition">
          {t('projects')}
        </li>
        <li className="my-4 laptop:mr-2 hover:text-3xl text-transition">
          {t('about')}
        </li>
      </ul>
      <ul className="flex flex-col laptop:flex-row items-center justify-center h-full">
        <SocialLink
          iconSrc="/img/github.svg"
          url="https://github.com/felippepg"
          altText="Link do Github"
        />
        <SocialLink
          iconSrc="/img/linkedin.svg"
          url="https://www.linkedin.com/in/felippe-gon%C3%A7alves/"
          altText="Link do Linkedin"
        />
        <SocialLink
          iconSrc="/img/email.svg"
          url="felippepg.goncalves@outlook.com.br"
          altText="Link para enviar email"
        />
      </ul>
    </div>
  );
};

export default Options;
